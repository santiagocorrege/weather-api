const idCreator = () => {
    const ids = JSON.parse(localStorage.getItem('historial')).filter(x => x.id)
    let newId = 0
    while(newId === 0 || ids.includes(newId)){
        newId = Math.floor(Math.random()*100);
    }
    return newId
}
