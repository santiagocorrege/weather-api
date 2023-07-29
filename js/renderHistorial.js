document.addEventListener("DOMContentLoaded", () => {
    
    if(!localStorage.getItem('historial')) {
        localStorage.setItem('historial', JSON.stringify([]))
    } 

    const state = JSON.parse(localStorage.getItem('historial'))

    const fieldset = document.getElementById('fieldset-historial')
    const boton = document.getElementById('btn-reset')

    console.log(state);

    if(state){
        for(let elem of state) {
            let a = document.createElement('div')
            a.id = elem.id
            let desc = document.createElement('p')
            desc.id = `p-${elem.id}`
            desc.textContent = `Nombre: ${elem.ciudad}, Temperatura: ${elem.temperatura}`
            a.append(desc)
            fieldset.append(a)
        }
        
    } else {
        
    }
        boton.addEventListener('click', () => {
            localStorage.setItem('historial', [])
            location.reload()
            console.log(JSON.parse(localStorage.setItem('historial', [])));
        })
    
})


