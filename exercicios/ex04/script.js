function gerar(){
    
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('tab')
    
    if(num.value.length == 0){
        window.alert('[ERRO] Digite o número!')
    } else{
        let n = Number(num.value)
        tab.style.display = 'block'
        tab.innerHTML = ''
        for(c = 1; c <= 10; c++){
            let multi = n * c
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${multi}`
            tab.appendChild(item)
        }

    }
}

function limpar(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('tab')
    tab.style.display = 'none'
    num.reset()

}