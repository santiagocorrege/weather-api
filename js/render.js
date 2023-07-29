function pobladorCont (clima) {
    deleteCont()
    const fieldset = document.createElement('fieldset')
    fieldset.id = 'fieldset-resultado'

    const cont = document.createElement('div')
    cont.id = 'cont-resultado'

    const mainCont =  document.getElementById('main-cont')
    
    
    //Render y Mensaje error
    if(clima){
        mainCont.append(fieldset)
        fieldset.append(cont)
        //Main div : cont-resultado
        cont.innerHTML = ``
        cont.innerHTML = `<p id="p-lugar">${clima.ciudad}</p>`
        cont.innerHTML += `<p id="p-fecha">${clima.fecha}</p>`
        //Icono y temperatura Div: divIco
        const divIco = document.createElement('div')
        divIco.id = "divIco"
        cont.append(divIco)
        divIco.innerHTML = `<img src="https://openweathermap.org/img/wn/${clima.ico}@2x.png" id="p-ico"/>`
        divIco.innerHTML += `<p id="p-temp">${clima.temperatura}°C</p>`
        cont.innerHTML += `<p id="p-sensacion">Minima: ${clima.variacion.min}°C - Maxima: ${clima.variacion.max}°C - Sensación térmica ${clima.sensacion}°C</p>`
        cont.innerHTML += `<p class=detalles>${clima.detalles.viento.speed}m/s - ${clima.detalles.viento.dir} / ${clima.detalles.presion}hPa / Humedad: ${clima.detalles.humedad}%</p>`
        cont.innerHTML += `<p class=detalles>Visibilidad: ${clima.detalles.visibilidad}Km </p>`
        cont.innerHTML += `<p class=detalles> </p>`      
    } else {
        const mensajeError = document.createElement('p')
        mensajeError.id = "msj-error"
        mainCont.append(mensajeError)
        if (clima === undefined) {
            mensajeError.textContent = "Ingrese una Ciudad"
        } else {
            mensajeError.textContent = "Ciudad No valida"
        }
    }
}


function deleteCont () {
    const error = document.getElementById('msj-error')
    const fieldset = document.getElementById('fieldset-resultado')
    const name = document.getElementById('nombreID')
    name.value = ''
    if (error) {
        error.remove()
    }
    if (fieldset){
        fieldset.remove()
    }
}

