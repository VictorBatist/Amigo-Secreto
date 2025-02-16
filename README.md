<h1 align='center'> Sorteador do Amigo Secreto</h1>

<h2 align='center'>Nesse repositorio você poderá baixar localmente essa aplicação para sortear o amigo secreto em seus eventos e confraternizações de final de ano</h2>

![image](https://github.com/user-attachments/assets/fe6eec4f-7fb2-48f2-847a-16f519c0921f)

<h3 align='center'>Sobre o Projeto</h3>
<p align='center'>Essa é uma implementação tem cunho inteiramente educacional e serve como modo de aperfeiçomento em lógica de programação. 
<br><br>É um desafio proposto pela Oracle Next Education (ONE) em parceria com a Alura tem com o objetivo principal criar uma alternativa para sortear um amigo secreto em confraternizações ou eventos, para que seja um sorteio de forma aleatoria.<br><br>Também é o modo dos alunos da ONE praticarem a logica de programação, seus conhecimento em JavaScript e em versionamento de codigos com Git e GitHub</p>

<h3 align='center'>A implementação</h3>


![gif animado](assets/videos/amigo-secreto.gif)


<div align="center" style="display: inline_blocks">
<p>Nesse projeto foi usado inteiramente as seguintes tecnologias:</p>
  
<img height="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
<img height="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
<img height="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />        
</div>

<h4 align='center'>As principais funções do projeto estão listados abaixo:</h4>


>Função para adicionar amigos/participantes na lista
~~~JavaScript
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
~~~
>Função para exibir o nome dos adicionados ne tela
~~~JavaScript
function exibirAmigosNaTela(){ 
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = " ";
        
    for(let i = 0; i <= listaDeAmigos.length; i++){
        let nome = document.createElement('li');
        nome.textContent = listaDeAmigos[i];
        lista.appendChild(nome);
    }
}
~~~
>Função para sortear o amigo
~~~JavaScript
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
~~~
>EXTRA
>Função limpar o campo do input
~~~JavaScript
function limparCampo(){
    document.querySelector('input').value = '';
}
~~~~

<h3 align='center'>Como instalar e executar o programa</h3>
<p align='center'>Você pode fazer o download do arquivo .zip como mostrado abaixo:</p>

![image](https://github.com/user-attachments/assets/dddce9df-04ac-4122-b6ee-90ca1996e16c)

<p align='center'>Ou você pode clonar o repositorio pelo o Git Bash usando o seguinte comando:</p>

~~~git
git clone https://github.com/VictorBatist/Amigo-Secreto.git
~~~

<h4 align='center'> Após isso é só acessar a pasta/repositorio baixado ou clonado e executar o index.html no seu navegador</h4>


