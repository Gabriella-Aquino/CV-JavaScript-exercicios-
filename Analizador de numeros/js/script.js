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
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)
        res.innerHTML = '' //para limpar a frase da tela enquanto tiver adcionando novos numero
   }else{
        window.alert('Preencha corretamente')
   }
   //automatizar para apagar oq ta no input e não ter q clicar 
   num.value=''
   num.focus()
}

function finalizar(){
    if(valores.length == 0){
        document.window.alert('Adcione algum numero primeiro')
    }
    else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        let media = Number(soma/tot)
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} numeros</p>
        <p> O maior valor informado foi ${maior}</p>
        <p>O menor numero informado foi ${menor}</p>
        <p>A soma de todos os valores é ${soma}</p>
        <p>A media de todos os valores é ${media}</p>`
    }
}