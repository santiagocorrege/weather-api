const API_key = '633f3ecfa1a90ab07cc791adc3e4f562'

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

function geoLocalizador (loc) {
    return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${loc}&appid=${API_key}`)
    .then(res => res.json())
    .then(data => {
        if(data.length !== 0){
            return {lat: data[0].lat, lon: data[0].lon}
        } else {
            return false
        }
    })
}

function weatherCall(loc) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${loc.lat}&lon=${loc.lon}&units=metric&appid=${API_key}`)
    .then( res => res.json())
    .then( data => {
        const obj = {
            id: idCreator(),
            ciudad: `${data.name}, ${data.sys.country}`,
            fecha: fecha(data.timezone/3600),
            temperatura: data.main.temp,
            ico: data.weather[0].icon,
            sensacion: data.main.feels_like,
            variacion: {min: data.main.temp_min, max: data.main.temp_max},
            detalles: {humedad: data.main.humidity, presion: data.main.pressure, viento: {dir: data.wind.deg, speed: data.wind.speed}, visibilidad: data.visibility/1000 }
        }
        console.log('Objeto clima: ', data);
        return obj
    })
}

function fecha(timezoneDif) {
    const date = new Date()
    const time = date.getHours(date.setHours(date.getHours() + 3 + timezoneDif) );  // + timezoneDif // +3 (por uruguay) + timezone
    const minutes = date.getMinutes()
    const day = date.getDate()
    const dayName = date.toLocaleString('es-ES', {weekday: "long"}); //toLocaleString()
    const formatDay = dayName.split('').map((x, index) => index===0 ? x.toUpperCase() : x).join('')
    const month = date.getMonth()
    return (`${time}:${minutes}, ${formatDay}, ${day} ${meses[month]}`);
}


