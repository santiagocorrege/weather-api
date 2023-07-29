document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btn-buscar')

    //Creo el state (si no existe lo crea)
    if(!localStorage.getItem('historial')) {
        localStorage.setItem('historial', JSON.stringify([]))
    } else {
        console.log(JSON.parse(localStorage.getItem('historial')));
    }

    boton.addEventListener('click', async () => {
        const name = document.getElementById('nombreID').value
        if(name !== '') {
            const loc = await geoLocalizador(name)
            console.log(loc);
            if(loc){
                const clima = await weatherCall(loc)
                guardarState(clima)
                pobladorCont(clima)
            } else {
                pobladorCont(null)
            }
        } else {
            pobladorCont(undefined)
        }

    })
})


function guardarState (obj) {
    let arr = JSON.parse(localStorage.getItem('historial'))
    if(!arr.map(x => x.ciudad).includes(obj.ciudad)){
        arr.push(obj)
        localStorage.setItem('historial', JSON.stringify(arr))
        console.log('Historial: ',JSON.parse(localStorage.getItem('historial')));
    } else {
        console.log('Obj Incluido');
    }
    
}


