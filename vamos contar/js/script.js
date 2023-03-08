function contar(){
    var tini = document.getElementById('txtinicio')
    var tfim = document.getElementById('txtfim')
    var tpas = document.getElementById('txtpasso') 
    var res = document.getElementById('res')

    if(tini.value.length == 0 || tfim.value.length == 0 || tpas.value.length == 0){
        res.innerHTML='impossivel contar!'
    }else{
        var inicio = Number(tini.value)
        var fim = Number(tfim.value)
        var passo = Number(tpas.value)
        
        if(passo <= 0){
            window.alert('Passo ivalido! Vamos considerar passo igual a 1')
            passo = 1
        }
       
        res.innerHTML = 'contando: '
        if(inicio < fim){
            for(let c = inicio; c <= fim; c+=passo){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{
            for(let c = inicio; c >= fim; c-=passo){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}

