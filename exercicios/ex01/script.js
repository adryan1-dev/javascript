function carregar(){
    const hora = new Date().getHours()
    const horario = document.getElementById('hora')
    const img = document.getElementById('imagem')

    horario.innerHTML = `Agora são <strong>${hora}</strong> horas`

    if(hora >= 6 && hora<= 12){
        img.src = 'imagens/manha.png'
        document.body.style.backgroundColor = '#fef3db'
    } else if(hora > 12 && hora < 18){
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#cc7149'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor = '#192c37'
    }
}