let nombreIngresado = prompt ("Ingrese su nombre");
if ((nombreIngresado != "")){
    alert (`¡Hola, ${nombreIngresado}! Bienvenido/a a la tienda de ropa "Insieme"`);
} else{
    alert ("ERROR: Ingresa tu nombre");
}


const dbRopa = [
    {
        id: 1,
        nombre: "Camisa",
        precio: 8000,
        stock: 10,
    },
    {
        id: 2,
        nombre: "Remera",
        precio: 5000,
        stock: 15,
    },
    {
        id: 3,
        nombre: "Jeans",
        precio: 15000,
        stock: 6,
    },
    {
      id: 4,
      nombre: "Pollera",
      precio: 5500,
      stock: 8,
  },
  {
    id: 5,
    nombre: "Zapatillas",
    precio: 10000,
    stock: 8,
  }
];


let trueOrFalse = true;
let carrito = []

function initProgram (){
  while (trueOrFalse){
    const seleccion = parseInt (prompt ("1. Ver la indumentaria \n 2.Comprar \n 3.Salir"));
    switch (seleccion){
      case 1:
        mostrarProductos ();
        break;
      case 2:
        comprarRopa ();
        break;
      case 3:
        break;
      default:
          alert ("No es una opción correcta");
          break;    
    }
  }
} 

function mostrarProductos (){
  let productos = "";
  dbRopa.forEach((producto, index) => {
    productos += `\n ${index + 1} El producto ${producto.nombre} tiene un precio de ${producto.precio}`
  })
  alert (productos)
}

function comprarRopa (){ 
    mostrarProductos()
    const seleccion= parseInt(prompt ("Ingrese el número del producto que desea comprar"))
    let resultado
    switch (seleccion) {
        case 1:
          resultado = buscarProducto (1)
          break;
        case 2:
          resultado = buscarProducto (2)
          break;
        case 3:
          resultado = buscarProducto (3)
          break;
        case 4:
          resultado = buscarProducto (4)
          break;
        case 5:
          resultado = buscarProducto (5)
          break;
        default:
          alert ("No es una opción válida")
          comprarRopa()
          break;
    }

    if (resultado){
      procesoCompra(resultado)
    }else{
      comprarRopa()
    }
}



function procesoCompra (producto){
let cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto.nombre} a comprar`)) 
  if (cantidad > producto.stock){
    procesoCompra (producto)
  }else if (cantidad <= producto.stock){
    let total = cantidad * producto.precio;
    alert (`El total de tu compra es de ${total}`);
    const productoComprado = {
      ...producto,
      stock:cantidad,
      precio: total
    }
    carrito.push(productoComprado)

    controlarStock(productoComprado)
    seguirCompra()
  }
}



function seguirCompra (){
  const seguir = prompt ("Desea seguir comprando ropa? Si/No")
  if (seguir == "Si"){
    procesoCompra()
  }else if (seguir == "No"){
    procesoFacturacion()
    initProgram ()
  }else{
    alert ("No es opción válida")
    seguirCompra()
  }
}



function controlarStock (productoComprado){
  dbRopa.forEach ((producto) => {
    if (productoComprado.id == producto.id){
      producto.stock = producto.stock - productoComprado.stock;
    }
  })
}



function buscarProducto (id){
  const producto = dbRopa.find ((producto) => {
      return producto.id == id
  })
  if (producto){
    return producto
  }else {
    alert ("No se encontró el producto")
  }
}



function porocesoFacturacion() {
  const total = carritoTotal ()
  alert (`El total de su compra es de ${total}`)
}

function carritoTotal(){
    const total = carrito.reduce ((acumulador, producto) => acumulador + producto.precio, 0)
    return total
  }



initProgram ()