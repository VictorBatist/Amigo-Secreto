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
        exibirAmigosNaTela();
    }
    
    limparCampo();   
}
//função de exibir o nome dos amigos na tela
function exibirAmigosNaTela(){ 
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = " ";
        
    for(let i = 0; i <= listaDeAmigos.length; i++){
        let nome = document.createElement('li');
        nome.textContent = listaDeAmigos[i];
        lista.appendChild(nome);
    }
}

function sortearAmigo(){
    let resultadoDoSorteio = document.getElementById('resultado');
    if(listaDeAmigos == []){
        alert('Por favor, insira um nome');
    }else{
        // escolhe um indice Aleatorio e consecutivamente um nome aleatorio no Array 
        let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        let nomeSorteado = listaDeAmigos[indiceAleatorio];
        console.log(nomeSorteado);

        // imprimi o resultado do nome sorteado na tela
        let resultado = document.createElement('li');
        resultado.textContent = `Seu Amigo Secreto é: ${nomeSorteado}`;
        resultadoDoSorteio.appendChild(resultado);
    }
}

// função limpar campo do input 
function limparCampo(){
    document.querySelector('input').value = '';
}


