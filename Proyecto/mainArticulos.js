// hacemos el fetch para mostrar loos productos
const contenedor = document.querySelector("#fetch");

const mostrarArticulos = async () =>{
    let productos = await obtenerProductos()
    console.log("🚀 ~ file: mainArticulos.js:19 ~ mostrarArticulos ~ productos", productos)
    productos.forEach((articulo) => {
        contenedor.innerHTML += `
                          <div>
                              <h3>${articulo.nombre}</h3>
                              <p> Descripcion : ${articulo.descripcion}</p>
                              <p> Stock : ${articulo.stock}</p> 
                              <p> Precio : ${articulo.precio}</p>
                          </div> 
                      `;
      });
}
mostrarArticulos()