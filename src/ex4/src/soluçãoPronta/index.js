/* 
    Passo 1 - Pegar todos os inputs que tenham a mesma classe.

    Passo 2 - Dar um jeito de percorrer cada input.

    Passo 3 - Quando o usuário preencher algo, precisamos disparar a ação para verificar se o input foi alterado.
			
	Passo 4 - Realizar a verificação se o valor do input é diferente de vazio.

	Passo 5 - Se o input tiver alguma informação, adicionamos a classe de campo-preenchido que vai dar a borda verde ao input.

	Passo 6 - Se o input estiver vazio, removemos a classe campo-preenchido.

*/ 

// Passo 1 - Pegar todos os inputs que tenham a mesma classe com o querySelectorAll.
let inputText = document.querySelectorAll(".input-text");

// Passo 2 - Dar um jeito de percorrer cada input - vamos utilizar o laço de repetição forEach para percorrer cada input.
inputText.forEach(input => {
    // Passo 3 - Quando o usuário preencher algo, precisamos disparar a ação para verificar se o input foi alterado.
    input.addEventListener('change', () => {
        // Passo 4 - Realizar a verificação se o valor do input é diferente de vazio.
        if (input.value !== "") {
            // Passo 5 - Se o input tiver alguma informação, adicionamos a classe de campo-preenchido que vai dar a borda verde ao input.
            input.classList.add("campo-preenchido")
        } else {
            // Passo 6 - Se o input estiver vazio, removemos a classe campo-preenchido.
            input.classList.remove("campo-preenchido")
}
});
});

// se eu não usasse o forEach eu teria que usar duas funções, uma pra cada input. Da mesma forma que a minha seleção pelo query selector all fez com que isso fosse possível. 

//usar (input.value !== "") foi valido, o parâmetro input serve como verificação de vazio ou não mesmo sem sem capturar o valor que tem dentro.

// o evento change do addEventListner foi uma sacada