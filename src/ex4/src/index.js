//Descrição da tarefa:  

//capturar os inputs para uma variável
//adicionar um escutador nesses inputs

//mandar pra uma função que fica alterando os valores da borda

//Ao digitar qualquer texto em um desses inputs, a sua borda deverá ficar com a cor verde. 
// se o tamanho do valor do conteúdo for maior que 0 a cor da borda muda

//Caso o input estiver vazio, a cor da borda deverá voltar ao normal. 
// Se o tamanho do valor do conteúdo for igual a zero a cor sai

let inputName = document.querySelector('#name')

let inputTel = document.querySelector('#tel')

inputName.addEventListener('input', (e) =>{ 
    if(inputName.value.lenght !== 0){
        inputName.style.backgroundColor = "red"
    }else if(inputName.value.lenght == 0){
        inputName.style.backgroundColor = "white"
    }
})
inputTel.addEventListener('input', (e) =>{
    console.log( e.target.value)
}) 