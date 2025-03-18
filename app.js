// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);
    actualizarLista();
    input.value = "";
    input.focus();
}

function actualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    listaAmigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const nombreSorteado = listaAmigos[indiceSorteado];
    
    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = "";
    const resultadoLi = document.createElement("li");
    resultadoLi.textContent = `El amigo secreto es: ${nombreSorteado}`;
    resultadoUl.appendChild(resultadoLi);
}
