document.getElementById("purchase-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Producto agregado exitosamente.");
  clearForm();
});

function clearForm() {
  document.getElementById("purchase-form").reset();
}
