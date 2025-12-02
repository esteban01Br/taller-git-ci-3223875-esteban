function suma(a, b) {
  return a + b;
}

console.log("App lista");

function agregarItem(texto) {
  const lista = document.getElementById("lista");
  const li = document.createElement("li");
  lista.appendChild(li);

  // Texto dentro del <li>
  li.textContent = texto;

  // Logs de ambas ramas combinados
  console.log("funcion agregarItem lista");
  console.log("Item agregado", texto);
}

module.exports = { suma, agregarItem };
