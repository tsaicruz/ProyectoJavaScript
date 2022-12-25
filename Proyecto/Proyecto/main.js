
// Usamos un addeventListener para que cuando ponga su nombre mande un alert 
const alertForm = document.querySelector("#alerta-form");
const alertInput = document.querySelector("#alerta-input");
alertForm.addEventListener("submit", () => {
    alert("Bienvenido " + alertInput.value); 
});


//Aca hacemos que cuando mande el nombre te direccione hacia la pagina para agregar productos
document.getElementById('accept-button').addEventListener('click', redirectToPage);
function redirectToPage() {
    window.location = './agregar.html';
  }

