function verificar(){
    const data = new Date().getFullYear()
    const fano = document.getElementById('txtano')
    const res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > data){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        const fsex = document.getElementsByName('sexo')
        const idade = data - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <=12){
                //Criança
                img.setAttribute('src', 'imagens/criança-m.png')
            } else if(idade <= 21){
                //Jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if(idade <= 50){
                //Adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else{
                //Idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <=12){
                //Criança
                img.setAttribute('src', 'imagens/criança-f.png')
            } else if(idade <= 21){
                //Jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if(idade <= 50){
                //Adulto
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else{
                //Idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Identificamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}