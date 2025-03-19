// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = ""; // Limpiar el campo de entrada

    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear los amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para realizar el sorteo.");
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpiar resultados anteriores

    // Copia del array para no modificar el original
    let amigosSorteados = [...amigos];

    // Mezclar el array de amigos
    amigosSorteados = shuffleArray(amigosSorteados);

    // Asignar amigos secretos
    for (let i = 0; i < amigosSorteados.length; i++) {
        const amigoActual = amigosSorteados[i];
        const amigoSecreto = amigosSorteados[(i + 1) % amigosSorteados.length]; // Circular

        const li = document.createElement('li');
        li.textContent = `${amigoActual} ➔ ${amigoSecreto}`;
        resultado.appendChild(li);
    }
}

// Función para mezclar un array (algoritmo de Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
