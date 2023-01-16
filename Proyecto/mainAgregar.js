//creamos un constructor de productos para que el usuario pueda crear productos nuevos
class Producto {
  constructor(nombre, descripcion, categoria, stock, precio) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.categoria = categoria;
    this.stock = stock;
    this.precio = precio;
  }

  // metodo agregando stock que acepta como parametro el stock que hay que agregar y this.stock = this.stock + (parametro)
  agregarProducto(stock) {
    this.stock = stock + this.stock;
  }
}

// hacer un filter del  array y buscar el stock para sumarle con el stock que esta siendo guardado

//filtrado por precio
const filtraPorPrecio = async () => {
  let productos = await obtenerProductos();
  let productosFiltrados = productos.filter(
    (producto) => producto.precio > 600
  );
  console.log(productosFiltrados);
};

//Busqueda
const busqueda = async () => {
  let productos = await obtenerProductos();
  let productosFiltrados = productos.find(
    (producto) => producto.categoria == "lapicera"
  );
  console.log(productosFiltrados);
};

// FUNCION QUE DESPLIEGA EL FORMULARIO SI TOCA EL CLICK CUANDO DICE QUE SI
function desplegarForm() {
  let formulario = document.getElementById("desplegarFormulario");
  let boton = document.getElementById("btn-aceptar-desplegar");
  if (formulario.style.display === "block") {
    formulario.style.display = "none";
    boton.innerText = "SI";
  } else {
    formulario.style.display = "block";
    boton.innerText = "Cerrar";
  }
}
document
  .getElementById("btn-aceptar-desplegar")
  .addEventListener("click", desplegarForm);

// FUNCCION QUE CUANDO APRETA VER PRODUCTOS VAYA A OTRA PAGINA Y PUEDA VER LOS PRODUCTOS QUE ESTAN
document
  .getElementById("btn-productos")
  .addEventListener("click", redirectToPageArticulos);
function redirectToPageArticulos() {
  window.location = "./articulosVista.html";
}

// FUNCION QUE CUANDO DICE QUE NO VUELVA A LA PAGINA ANTERIOR
document
  .getElementById("btn-rechazar")
  .addEventListener("click", redirectToPage);
function redirectToPage() {
  window.location = "./index.html";
}

//anda y fijate si existe el elemento kk en el localStorage si hay usalo, pero si no, crea una nueva array
const ListaMascota = JSON.parse(localStorage.getItem("libreriaArts")) || [];

// funcion de crear una nueva mascota que cuando hace click agrega al producto
const crearProducto = async () => {
  let libreriaArts = await obtenerProductos();
  let nombreProducto = document.getElementById("nombre-producto").value;
  let descripcionProducto = document.getElementById(
    "descripcion-producto"
  ).value;
  let categoriaProducto = document.getElementById("categoria-producto").value;
  let stockProducto = document.getElementById("stock-producto").value;
  let precioProducto = document.getElementById("precio-producto").value;

  const prodNuevo = new Producto(
    nombreProducto,
    descripcionProducto,
    categoriaProducto,
    stockProducto,
    precioProducto
  );

  libreriaArts.push(prodNuevo);
  localStorage.setItem("libreriaArts", JSON.stringify(libreriaArts));

  // console.log(prodNuevo);
  return libreriaArts;
};

const formulario = document.getElementById("desplegarFormulario");

//cuando aprete el formulario no lo refresa y corre nuevo producto
formulario.onsubmit = (e) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Guardaste tu stock",
    showConfirmButton: false,
    timer: 1500,
  });
  e.preventDefault();
  crearProducto();
  formulario.reset();
};
