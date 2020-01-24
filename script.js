function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.getElementById('resultado')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 13) {
                // Crianca
                img.setAttribute('src', 'img/menina.jpg')
            } else if (idade < 20) {
                // Adolescente
                img.setAttribute('src', 'img/teengirl.jpg')
            } else if (idade < 65) {
                // Adulto
                img.setAttribute('src', 'img/mulher.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'img/senhora.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 13) {
                // Crianca
                img.setAttribute('src', 'img/menino.jpg')
            } else if (idade < 20) {
                // Adolescente
                img.setAttribute('src', 'img/teenboy.jpg')
            } else if (idade < 65) {
                // Adulto
                img.setAttribute('src', 'img/homem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'img/senhor.jpg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}