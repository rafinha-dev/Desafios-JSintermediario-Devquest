// 4- ao clicar no botão somente o quadrado azul deve ter sua cor alterada para amarelo.

// primeiro devo criar uma classe que será aplicada com background amarelo. 
// segundo devo criar uma função que com onclick troca a classe desse elemento
// para que a troca aconteça esse elemento html deve ser capturado pelo DOM substituindo a classe dele.
----
// com o classList não foi possivel fazer a mudança então vou usar o style
function trocarcor(){
    let amarelo = document.getElementsByClassName('quadrado1')

    amarelo.style.backgroundColor = yelow
}