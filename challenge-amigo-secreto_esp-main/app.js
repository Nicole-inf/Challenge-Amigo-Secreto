//Lista donde se almacenaran los nombres
let amigos = [];
//Agregar nombres a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    //Validar que no este vacio
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido");
        return;
    }
    //Agregar nombre al array
    amigos.push(nombre);

    //Mostrar lista en la pagina
    mostrarLista();

    //Limpiar el campo de texto
    input.value = "";
    input.focus();
}

//Mostrar los nombres en la lista visible
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar antes de volver a dibujar

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//Realizar el sorteo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear");
        return;
    }

    //Elegir un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    //Mostrar el resultado en pantalla
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}