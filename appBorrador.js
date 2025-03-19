// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Deberás crear una función llamada "calculateWinner" que reciba como parámetro un array de 3 strings, cada uno representando una fila de un tablero de 3x3.
// El tablero de 3x3 se representa de la siguiente forma:   0 1 2   3 4 5   6 7 8
// La función deberá retornar un string con el nombre del ganador. En caso de no haber ganador, deberá retornar "Empate".
// Agregar nombres a la lista de amigos cuando el usuario presione el botón "Añadir".
// El nombre debe ser añadido a la lista de amigos y no debe ser vacío.
// Mostrar la lista de nombres en la página.
// Agregar un botón para cada nombre que permita eliminarlo de la lista.
// Agregar un botón que permita eliminar todos los nombres de la lista.
// Agregar un botón que permita cambiar el nombre de un amigo de la lista.
// Realizar el sorteo aleatorio, asegurándose de que nadie se asigne a sí mismo.
// Mostrar el resultado del sorteo en la página.
// Agregar un botón que permita reiniciar el sorteo.
let amigos = [];

document.getElementById("amigo").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    agregarAmigo();
  }
});

function agregarAmigo() {
  let input = document.getElementById("amigo");

  let nombre = input.value.trim(); // Elimina los espacios en blanco al inicio y al final

  if (nombre === "") {
    alert("El nombre no puede estar vacío");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("El nombre ya está en la lista");
    return;
  }

  amigos.push(nombre);
  input.value = ""; // Limpia el campo después de agregar el nombre.

  actualizarListaAmigos();
}

function actualizarListaAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpia la lista antes de volver a generarla.

  amigos.forEach((nombre) => {
    let li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("¡No hay amigos en la lista para sortear!");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  mostrarResultado(amigoSorteado);
}

function mostrarResultado(nombre) {
  let listaResultados = document.getElementById("resultado");
  listaResultados.innerHTML = ""; // Limpia la lista antes de volver a generarla.

  let li = document.createElement("li");
  li.textContent = `El amigo secreto es: ${nombre}`;
  listaResultados.appendChild(li);
}
