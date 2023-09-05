let nombreIngresado = prompt ("Ingrese su nombre");
if ((nombreIngresado != "")){
    alert (`¡Hola, ${nombreIngresado}! Bienvenido/a a la tienda de ropa "Insieme"`);
} else{
    alert ("ERROR: Ingresa tu nombre");
}


const ropa = [
    {
        id: 1,
        nombre: "Camisa",
        precio: 8000,
    },
    {
        id: 2,
        nombre: "Remera",
        precio: 5000,
    },
    {
        id: 3,
        nombre: "Jeans",
        precio: 15000,
    },
];

let ropaArr = [];
let carritoArr = [];
let trueOrFalse = true;

class Indumentaria {
    constructor ({ id, nombre, precio}) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

function comprarRopa() {
    let ropaBuscar = prompt("Que quiere comprar?");
    let ropaEncontrada = ropa.some((elm) => {
      return elm.name === ropaBuscar;
    });
    if (ropaEncontrada) {
      alert("El producto existe");
      addToCart(ropaBuscar);
    } else {
      alert("El producto no existe");
    }
  }
  comprarRopa ();


  function agregarAlCarrito(ropaBuscar) {
    let producto = ropaArr.find((elm) => {
      return elm.name === ropaBuscar;
    });
    if (producto) {
      carritoArr.push(producto);
      let confirmar = prompt("Desea agregar otro producto? SI/NO");
      if (confirmar === "SI") {
        comprarRopa();
      } else {
        sumarPrecioTotal();
        eliminarTodosLosProductos();
      }
    }
  }
  
  function sumarPrecioTotal() {
    let precioTotal = carritoArr.reduce(
      (acumulador, producto) => acumulador + producto.price,
      0
    );
    alert("El precio total es " + precioTotal);
  }