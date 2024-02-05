/* 
Passo 1 - Pegar o elemento do quadrado azul no JS.

		Passo 2 - Quando o usuário clicar no quadrado, precisamos disparar a ação de verificar se a cor do quadrado é a cor azul.

		Passo 3 - Criamos uma varíavel que irá verificar se a classe contém a cor azul. 

		Passo 4 - Fazer a verificação utilizando essa varíavel criada, se ela existir, é removida a classe azul do quadrado. 
							
		Passo 5 - Caso não ter a cor azul, é adicionada a classe e o alerta deve ser disparado.
		
*/

const quadrado = document.querySelector(".quadrado") //1

//2
quadrado.addEventListener('click', ()=>{
    const classeAzulExiste = quadrado.classList.contains('azul') //3

    //4
    if(classeAzulExiste){
        quadrado.classList.remove("azul")
    }else{
        quadrado.classList.add('azul')
    }
})