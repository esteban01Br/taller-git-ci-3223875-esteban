function suma(a, b) {
  return a + b;
}

console.log("App lista");

function agregarItem(texto) {
  const lista = document.getElementById("lista");
  const li = document.createElement("li");
  li.textContent = texto;
  lista.appendChild(li);
  console.log("funcion agregarItem lista");
} 

module.exports = { suma, agregarItem };

