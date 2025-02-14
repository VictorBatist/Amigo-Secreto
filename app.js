//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

function adicionarAmigo(){
    //selecionando o nome dos amigos 
    let nomeDoAmigo = document.querySelector('input').value
    //validação do nome 
    if(nomeDoAmigo == ''){
        alert('Por favor, insira um nome');
    }else{
        listaDeAmigos.push(nomeDoAmigo);
        console.log(listaDeAmigos);
    }
    
    limparCampo();
   
}
// função limpar campo do input 
function limparCampo(){
    document.querySelector('input').value = '';
}
