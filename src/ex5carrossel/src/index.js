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

// capturar as setinhas
let arrows = document.querySelectorAll('.arrows')
console.log(arrows)[0]

let main = document.querySelectorAll('.main')

let imagemAtual = 0

arrows[1].addEventListener("click", () =>{
    // esconderImagem()
    
    console.log(imagemAtual)
    imagemAtual++

    console.log(imagemAtual)
    main[imagemAtual].classList.add("mostrar")
})

function esconderImagem(){
    const imagemAberta = document.querySelector('.mostrar')
    imagemAberta.classList.remove('mostrar')
}
// arrows[1].addEventListener('click', () => {
//     alert('olá')
// })
// arrows[0].addEventListener('click', () => {
//     alert('olá')
// })

