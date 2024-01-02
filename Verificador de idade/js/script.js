function verificar(){
    //ano atual
    var data = new Date()
    var ano = data.getFullYear() //full para ter os 4 digitos
    //ano formulario e res
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    // conferindo se o ano digitado é valido
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[error]Por favor confira os dados e tente novamente')
    }else{
        //Tudo ok, agr pegar o restante das informações efazer os calculos 
        var fsex = document.getElementsByName('radsexo') //aqui tem que ser name
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade<10){
                //criança
                img.setAttribute('src', 'img/foto-bebe-m.png')
            }else if(idade<21){
                //jovem
                img.setAttribute('src', 'img/foto-jovem-m.png')
            }else if(idade<50){
                //adulto
                img.setAttribute('src', 'img/foto-adulto-m.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'img/foto-idoso-m.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade<10){
                //criança
                img.setAttribute('src', 'img/foto-bebe-f.png')
            }else if(idade<21){
                //jovem
                img.setAttribute('src', 'img/foto-jovem-f.png')
            }else if(idade<50){
                //adulta
                img.setAttribute('src', 'img/foto-adulto-f.png')
            }
            else{
                //idosa
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }
        } 
        res.style.textAlign= 'center'
        res.innerHTML= `detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}

