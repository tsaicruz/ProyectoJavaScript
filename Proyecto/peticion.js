const obtenerProductos = async() => {
    if (!localStorage.getItem("libreriaArts")) {
      let productos = await fetch("./articulos.json")
                  .then(res => res.json())
                  .then(productos => productos)
                  console.log(productos);
          return productos
    }
  
    return JSON.parse(localStorage.getItem("libreriaArts"));
    
};