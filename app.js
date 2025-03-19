// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
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
  lista.innerHTML = ""; // Limpiar la lista antes de actualizarla

  amigos.forEach((nombre, index) => {
    let listItem = document.createElement("li");
    listItem.textContent = nombre;

    // Crear botón de eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "❌";
    botonEliminar.classList.add("delete-button");
    botonEliminar.onclick = function () {
      eliminarAmigo(index);
    };

    listItem.appendChild(botonEliminar); // Agregar el botón al elemento de la lista
    lista.appendChild(listItem); // Agregar el elemento a la lista
  });
}

function eliminarAmigo(index) {
  amigos.splice(index, 1); // Elimina el nombre de la lista
  actualizarListaAmigos(); // Actualiza la lista en la interfaz
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

function resetearSorteo() {
  amigos = []; // Vacía la lista de amigos
  document.getElementById("listaAmigos").innerHTML = ""; // Borra los nombres de la interfaz
  document.getElementById("resultado").innerHTML = ""; // Borra el resultado del sorteo
}
