/* ao clicar em uma pergunta deve aconteceruma animação de acordeon para abrir o iteme mostrar o texto escondido, e a seta devemudar de cor. */

/* ao clicar em um item para abri-lo todos osoutros itens devem ser fechados. */ 

/* Referência do que é um efeito acordeonhttps://www.netflix.com/br/ na seção"Perguntas Frequentes".
Pontos de atenção:
https://www.figma.com/file/zBKnYG9UNdUiIr8ClQTWSG/?node-id=3%3A3
*/ 

let acordeon = document.querySelectorAll('.acordeon')
// quando usado queryselectorall não pode usar um listner nele, logo para que seja possível tem que usar o data. ou coloca-lo dentro de um foreach como elemento
let question = document.querySelectorAll('.question')
let section =  document.querySelectorAll('.section')
let arrows = document.querySelectorAll('.color-arrow')

const hide = ()=>{
    acordeon.forEach((element, i)=> {
        acordeon[i].classList.replace('show', 'hide')
    }) 
}
const classChange = (i)=>{
    acordeon[i].classList.replace('hide', 'show')
}
const arrowChange = ()=>{
    arrows.forEach((element,i)=>{
        arrows[i].setAttribute('src', './src/assets/images/Design sem nome (5) 1.svg')
    })
}

section.forEach( (element, i) =>{
    
    element.addEventListener('click', ()=>{
        hide()
        classChange(i)
        arrowChange()
        arrows[i].setAttribute('src', './src/assets/images/seta aberta.png')
        
        })

        // element.classList.toggle("hide")
        // o toggle é usado quando uma classe pode ser usada com classlist add e remove. Ele valida entre true e false encurtando o código e evitando ter que fazer todo esquema de add e remove, porém a mesma tem que funcionar pra adicionar e remover.
    
    })

// let i = [true, true, true]


// function response(num){

//     console.log(i[num])
//     if(i[num] === false){
//         hideAll()

//     }else if(i[num] === true){
        
//         hideAll()
//         question[num].classList.add("show")
//         i[num] = false
//         question[num].classList.remove("hide")
//         colorArrows[num].setAttribute('src', './src/assets/images/seta aberta.png')
//     }

// }


// function hideAll(){
//     for(let contador = 0; contador < arrows.length ; contador ++){
//         // console.log(contador)
//         i[contador] = true
//         arrows[contador].classList.remove("show")
//         arrows[contador].classList.add("hide")
//         colorArrows[contador].setAttribute('src', './src/assets/images/Design sem nome (5) 1.svg')
//     }
// }