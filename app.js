let amigos = [];

// AGREGA UN AMIGO
function agregarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nombre = amigoInput.value.trim();
    if (nombre === '') {
        alert('Por favor, ingresa un nombre para agregar.');
        return; // DETIENE SI EL NOMBRE ESTA VACIO
    }

    amigos.push(nombre);
    mostrarListaAmigos();
    amigoInput.value = '';
}

// ACTUALIZA HTML
function mostrarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// SORTEA EL AMIGO
function sortearAmigo() {
    //VALIDAMOS SI HAY AL MENOS UN AMIGO
    if (amigos.length === 0) {
        alert('Agrega al menos un nombre para realizar el sorteo.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById('resultado').textContent = `El amigo secreto es: ${amigoSorteado}`;//MUESTRA EL NOMBRE SORTEADO
}