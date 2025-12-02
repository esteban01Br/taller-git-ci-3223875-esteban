function suma(a, b) {
  return a + b;
}

console.log("App lista");

function agregarItem(texto) {
  const lista = document.getElementById("lista");
  const li = document.createElement("li");
  li.textContent = texto;
  lista.appendChild(li);
  li.textContent = texto;

  console.log("Item agregadoo", texto);
}

module.exports = { suma, agregarItem };

