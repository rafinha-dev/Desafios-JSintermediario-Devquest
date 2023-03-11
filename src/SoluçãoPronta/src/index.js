let btn = document.getElementById('btn-trocarCor')

let blue = document.getElementById('blusao')

btn.addEventListener("click", trocaCor)

function trocaCor(){
    blue.classList.remove("quadrado1")

    blue.classList.add("amarelo")
}