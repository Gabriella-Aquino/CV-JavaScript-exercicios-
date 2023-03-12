function gerar(){
    let tnum = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    if(tnum.value.length == 0){
        window.alert('Por Favor preencha o campo')
    }else{
        let num = Number(tnum.value)
        tab.innerHTML = ''
        for(let x = 0; x < 11; x++){
            let item = document.createElement('option')
            item.text = `${x} x ${num} = ${x * num}`
            tab.appendChild(item)
        }
    }
}