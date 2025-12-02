function suma(a, b) {
  return a + b;
}

console.log("App lista");
suggestion
function agregarItem(texto) {
  const lista = document.getElementById("lista");
  const li = document.createElement("li");

  li.textContent = texto;
  lista.appendChild(li);

  console.log("Item agregado:", texto);
}
  // Texto dentro del <li>
  li.textContent = texto;

  // Logs de ambas ramas combinados
  console.log("funcion agregarItem lista");
  console.log("Item agregado", texto);
}

module.exports = { suma, agregarItem };
