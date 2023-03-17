/* 
let frame = {
    background: document.querySelector('.background-cerejeira'),
    info: document.querySelector('.info'),
    title: document.querySelector('.title')
}
let carrosel = []

let arrows = document.querySelectorAll('.arrows')


arrows.forEach((arrows) => {
    arrows.addEventListner('click', function() {
        console.log('ola')
    })
})

minha primeira ideia era pegar os elementos de dentro da página e estilizalos fazendo alterações no css inserirndo as imagem pelo foreach. 
Porem no foreach por que são duas setas.As coisas não estavam funcionando e eu comecei a procurar uma nova forma de fazer. acabei fazendo dessa forma que ele começou a mostrar com html 100% semantico apenas trocando uma classe que exibe tudo. 

*/

// capturar as setinhas e 
// dar um jeito de usar elas com um contador de 0 a 3 para trocar as telas com a classe mostrar, 
// o ultimo de um lado e o primeiro do outro tira opacidade da imagem

let laftArrow = document.getElementById('laft-arrow')
console.log(laftArrow)
// capturar as setinhas
let rightArrow = document.getElementById('right-arrow')
console.log(rightArrow)
let main = document.querySelectorAll('.main')
console.log(main)
let imagemAtual = 0

// laftArrow.addEventListener("ArrowLeft", arrow())
laftArrow.addEventListener("click", function arrow(){
    if(imagemAtual === 0){
        return
    }
    main[imagemAtual].classList.remove("mostrar")
    imagemAtual-- 
    main[imagemAtual].classList.add("mostrar")
})

rightArrow.addEventListener("click", () =>{

    if( imagemAtual === main.length - 1){
        return
    }
    esconderImagem()
    //só consigo passar o array pra clique e agora?
    console.log(imagemAtual)
    imagemAtual++

    main[imagemAtual].classList.add("mostrar")

    opacityArrows()
})

function esconderImagem(){
    const imagemAberta = document.querySelector('.mostrar')
    imagemAberta.classList.remove('mostrar')
}

function opacityArrows(){
 const notFirst = imagemAtual !== 0
 if(notFirst){
    laftArrow.classList.remove("opacity")
 } else{
    laftArrow.classList.add("opacity")
 }

 const lastImage = imagemAtual !== 0 && imagemAtual === main.length - 1
 if(lastImage){
    rightArrow.classList.add("opacity")
 }else{
    rightArrow.classList.remove("opacity")
 }
}
// arrows[1].addEventListener('click', () => {
//     alert('olá')
// })
// arrows[0].addEventListener('click', () => {
//     alert('olá')
// })

