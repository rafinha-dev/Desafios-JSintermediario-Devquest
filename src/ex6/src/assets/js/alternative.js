// para que funcione é preciso colocar uma chamada com o número de parâmetro.

let acordeon = document.querySelectorAll('.acordeon')
// quando usado queryselectorall não pode usar um listner nele, logo para que seja possível tem que usar o data. ou coloca-lo dentro de um foreach como elemento
let question = document.querySelectorAll('.question')
let arrows = document.querySelectorAll('.color-arrow')
let i = [true, true, true]


function response(num){

    console.log(i[num])
    if(i[num] === false){
        hideAll()

    }else if(i[num] === true){
        
        hideAll()
        question[num].classList.add("show")
        i[num] = false
        question[num].classList.remove("hide")
        arrows[num].setAttribute('src', './src/assets/images/seta aberta.png')
    }

}


function hideAll(){
    for(let contador = 0; contador < arrows.length ; contador ++){
        // console.log(contador)
        i[contador] = true
        arrows[contador].classList.remove("show")
        arrows[contador].classList.add("hide")
        colorArrows[contador].setAttribute('src', './src/assets/images/Design sem nome (5) 1.svg')
    }
}