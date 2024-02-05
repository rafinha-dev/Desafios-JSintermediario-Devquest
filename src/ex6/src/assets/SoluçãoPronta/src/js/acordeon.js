const itensPerguntasERespostas = document.querySelectorAll('.item')

itensPerguntasERespostas.forEach( function(item){
    item.addEventListener('click', function(){
        const itemAtivoAtual = document.querySelector('.ativo')
        
        if(itemAtivoAtual){
            // caso algum elemento não tenha a classe ativo, ou seja não tenha sido incluida no HTML ainda, isso será um problema. Então caso use essa forma de procurar uma classe ela tem que estar no html para que funcione se não terá um urro de elemento nulo.
            itemAtivoAtual.classList.remove('ativo')
        }
    item.classList.add('ativo')
})
})