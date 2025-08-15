let amigos = [];

function adicionarAmigo(){
    let nomes = document.getElementById('amigo').value;

    if (nomes == ""){
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nomes);
        limparCampo();
        exibirLista();
        return nomes;
    }    
}

function limparCampo(){
   nomes = document.querySelector('input');
   nomes.value = "";
   lista = document.getElementById('listaAmigos');
   lista.innerHTML = "";
}

function exibirLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
     for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}


function sortearAmigo(){
    let nomeAleatorio = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById('resultado');
    limparCampo();
    resultado.innerHTML = `<li>Seu amigo secreto é: ${amigos[nomeAleatorio]}</li>`;
}



