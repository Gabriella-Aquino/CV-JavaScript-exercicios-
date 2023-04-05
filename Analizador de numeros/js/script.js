let num = document.getElementById('txtnum')
let tab = document.getElementById('seltab')
let res = document.getElementById('res')
let valores = []

function numvalido(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inlist(n, l){ 
    if(l.indexOf(Number(n)) != -1){ //esta na lista
        return false 
    }else{
        return true 
    }
}

function adicionar(){
   if(numvalido(num.value) && inlist(num.value, valores)){
        window.alert('ok')
   }else{
        window.alert('Preencha corretamente')
   }
}