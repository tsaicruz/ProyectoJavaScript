// Usamos un addeventListener para que cuando ponga su nombre mande un alert
const alertForm = document.querySelector("#alerta-form");
const alertInput = document.querySelector("#alerta-input");

// alertForm.addEventListener("submit", () => {
//     alert("Bienvenido " + alertInput.value);
// });

const aceptar = document.querySelector("#accept-button");

// hacemos un evento que cuando pongas el nombre muestre el nombre de usuario y luego notifique un sweet alert, cuando etramos nos muestra la pantalla de agregar productos
aceptar.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(alertInput.value);
  if (alertInput.value !== "") {
    Swal.fire({
      icon: "success",
      confirmButtonText: "Aceptar",
      text: "Bienvenido " + alertInput.value + "!!",
    }).then((result) => {
      if (result.isConfirmed) {
        return (window.location.href = "./agregar.html");
      }
    });
  } else {
    Swal.fire({
      icon: "warning",
      confirmButtonText: "Aceptar",
      text: "Debes ingresar un nombre",
    });
  }
});
