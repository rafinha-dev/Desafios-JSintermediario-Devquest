// 1- Descrição da tarefa: Você deve criar 2 quadrados na tela usando HTML e CSS. 
//  2- O primeiro quadrado deve ter a cor de fundo azul e o segundo a cor de fundo vermelha. 
// 3- Além disso você deve adicionar um botão na tela com a label “Trocar de cor”
// 4- ao clicar no botão somente o quadrado azul deve ter sua cor alterada para amarelo.

// primeiro devo criar uma classe que será aplicada com background amarelo. 
// segundo posso criar uma função que com onclick troca a classe desse elemento
// para que a troca aconteça esse elemento html deve ser capturado pelo DOM substituindo a classe dele.
// com o classList não foi possivel fazer a mudança então vou usar o style
function trocarcor(){
    let amarelo = document.querySelector('.quadrado1')

    amarelo.style.background = 'yellow'
}