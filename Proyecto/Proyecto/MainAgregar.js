// creamos un array con objetos varios 
const libreriaArts =
[ 
            {nombre: "Sailor mars", descripcion: "lapicera fluor", categoria: "lapicera",  stock: 3, precio: 250},
            {nombre: "Sailor venus", descripcion: "agenda ecologica", categoria: "cuaderno", stock: 5, precio: 500},
            {nombre: "Digimon ",descripcion: "agenda premium", categoria: "cuaderno",  stock: 2,precio: 800},
            {nombre: "Pokemon ",descripcion: "Cuaderno", categoria: "cuaderno", stock: 1, precio: 100},
            {nombre: "Hora de aventura ",descripcion: "lapicera", categoria: "lapicera", stock: 10, precio: 600},
            {nombre: "Castores cascarrabias",descripcion: "Libro de estudio", categoria: "libros", stock: 50, precio: 150},
            {nombre: "Bananas en pijamas",descripcion: "Cuaderno acrilico", categoria: "cuaderno",  stock: 20, precio: 350},
]

//Array de productos con un produucto nuevo 
const prodNuevo= {
    nombre: "Agenda Sailor-Moon",
    tipo : "agenda",  
    categoria: "cuadernos",  
    stock: 2,
    precio: 30
}

//creamos un constructor de productos para que el usuario pueda crear productos nuevos
class Producto {
    constructor(nombre, descripcion, categoria, stock, precio){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.stock = stock;
        this.precio = precio;
    }
    
    // metodo agregando stock que acepta como parametro el stock que hay que agregar y this.stock = this.stock + (parametro)
        agregarProducto(stock){
        this.stock = stock + this.stock;
    }
}

// seguimos creando variables globales para empezar a contar el stock
let libros = 0;
let cuadernos = 0;
let lapiceras = 0;
let otros = 0;


// hacer un filter del  array y buscar el stock para sumarle con el stock que esta siendo guardado  
//filtrado por precio
const filtraPorPrecio = libreriaArts.filter(producto => producto.precio > 600);
console.log(filtraPorPrecio)

//Busqueda 
const busqueda = libreriaArts.find(producto => producto.categoria == "lapicera");
console.log(busqueda);  


// FUNCION QUE DESPLIEGA EL FORMULARIO SI TOCA EL CLICK CUANDO DICE QUE SI 
function desplegarForm() {
    var formulario = document.getElementById("desplegarFormulario");
    if (formulario.style.display === "block") {
      formulario.style.display = "none";
    } else {
      formulario.style.display = "block";
    }
  }
 document.getElementById("btn-aceptar-desplegar").addEventListener("click", desplegarForm);


// FUNCION QUE CUANDO DICE QUE NO VUELVA A LA PAGINA ANTERIOR
document.getElementById('btn-rechazar').addEventListener('click', redirectToPage);
function redirectToPage() {
    window.location = './index.html';
}


//anda y fijate si existe el elemento kk en el localStorage si hay usalo, pero si no, crea una nueva array
const ListaMascota = JSON.parse(localStorage.getItem("libreriaArts")) || [];

// funcion de crear una nueva mascota que cuando hace click agrega al producto
const crearProducto = () => {
    let nombreProducto = document.getElementById("nombre-producto").value;
    let descripcionProducto = document.getElementById("descripcion-producto").value;
    let categoriaProducto = document.getElementById("categoria-producto").value;
    let stockProducto = document.getElementById("stock-producto").value;
    let precioProducto = document.getElementById("precio-producto").value;

    const prodNuevo = new Producto(nombreProducto, descripcionProducto, categoriaProducto, stockProducto, precioProducto);

    libreriaArts.push(prodNuevo);
    localStorage.setItem("libreriaArts", JSON.stringify(libreriaArts))

    // console.log(prodNuevo);
    return libreriaArts;
}













const formulario = document.getElementById("desplegarFormulario");

//cuando aprete el formulario no lo refresa y corre nuevo producto
formulario.onsubmit = (e) => {
    e.preventDefault();
    crearProducto();
};    
































