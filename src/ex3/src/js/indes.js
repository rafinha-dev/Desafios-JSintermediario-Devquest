//Descrição da tarefa: Ao clicar no quadrado na tela, deve verificar se ele tem a classe azul.  Se tiver, deve alterar a cor do quadrado para a cor azul e mostrar um alerta com o texto “Esse quadrado TEM a classe azul!”. Se já possuir a cor azul, deve remover a cor azul, deixando a cor original. 

//1 passo criar uma classe para o quadrado e criar a classe azul

//2 criar uma função listner para monitorar o clique no quadrado azul

//3 fazer uma condição, quando não tiver a classe azul troca para ela e exibe a mensagem, e quando tiver a classe azul ao clicar muda para classe original.

let square = document.getElementById('square')

square.addEventListener('click', msg)

function msg(){
    if(square.classList.contains('blue')){

        square.classList.remove('blue')
        square.classList.add('black')
    }else if (square.classList.contains('black')){

        square.classList.remove('black')
        square.classList.add('blue')
        alert('Este quadrado TEM a classe Azul!')
        
    }else{
        alert('não funcionou')
    }
}