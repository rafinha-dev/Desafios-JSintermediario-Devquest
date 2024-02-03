/* ao clicar em uma pergunta deve aconteceruma animação de acordeon para abrir o iteme mostrar o texto escondido, e a seta devemudar de cor. */
/* ao clicar em um item para abri-lo todos osoutros itens devem ser fechados. */ 
/* Referência do que é um efeito acordeonhttps://www.netflix.com/br/ na seção"Perguntas Frequentes".*/ 

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