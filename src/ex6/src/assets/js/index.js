/* ao clicar em uma pergunta deve aconteceruma animação de acordeon para abrir o iteme mostrar o texto escondido, e a seta devemudar de cor. */

/* ao clicar em um item para abri-lo todos osoutros itens devem ser fechados. */ 

/* Referência do que é um efeito acordeonhttps://www.netflix.com/br/ na seção"Perguntas Frequentes".
Pontos de atenção:
https://www.figma.com/file/zBKnYG9UNdUiIr8ClQTWSG/?node-id=3%3A3
*/ 

let arrows = document.querySelectorAll('.acordeon')

let colorArrows = document.querySelectorAll('.color-arrow')

console.log(colorArrows)

let i = [true, true, true]


function response(num){

    if(i[num] === false){
        hideAll()
        
    }else if(i[num] === true){
        
        hideAll()
        i[num] = false
        arrows[num].classList.remove("hide")
        colorArrows[num].setAttribute('src', './src/assets/images/seta aberta.png')
    }

}


function hideAll(){
    for(let contador = 0; contador < arrows.length ; contador ++){
        // console.log(contador)
        i[contador] = true
        arrows[contador].classList.add("hide")
        colorArrows[contador].setAttribute('src', './src/assets/images/Design sem nome (5) 1.svg')
    }
}