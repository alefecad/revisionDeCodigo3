const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "../assets/img/taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "../assets/img/taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "../assets/img/bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "../assets/img/bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "../assets/img/zapato-rojo.jpg" }
];

const listaDeProductos = document.getElementById("lista-de-productos"); // Se cambia el método por getElementById para recuperar el id="lista-de-productos"
const inputTexto = document.querySelector('.input'); // Se renombra la variable $i por inputTexto par mejorar la legibilidad del código  
const botonDeFiltro = document.querySelector("button");

// Se crea una función flecha para tomar un array de productos como parámetro y crear dinámicamente elementos HTML para 
// cada producto por medio de un for, y poder agregar elementos al DOM dentro de un contenedor llamado "listaDeProductos"
const displayProductos = (productos) => { 
  for (let i = 0; i < productos.length; i++) {
    var divProducto = document.createElement("div"); // Se agregó el ; faltante
    divProducto.classList.add("producto"); // Se cambio el nombre de la variable d por divProducto para mejorar la legibilidad del código, también se agregó el ; faltante

    var parrafoTitulo = document.createElement("p"); // Se cambio el nombre de la variable ti por parrafoTitulo para mejorar la legibilidad del código, también se agregó el ; faltante
    parrafoTitulo.classList.add("titulo"); // Se cambio el nombre de la variable ti por parrafoTitulo para mejorar la legibilidad del código, también se agregó el ; faltante
    parrafoTitulo.textContent = productos[i].nombre; // Se cambio el nombre de la variable ti por parrafoTitulo para mejorar la legibilidad del código, también se agregó el ; faltante

    var imagen = document.createElement("img"); 
    imagen.setAttribute('src', productos[i].img);

    divProducto.appendChild(parrafoTitulo); // Se cambio el nombre de la variable d por divProducto para mejorar la legibilidad del código
    divProducto.appendChild(imagen); // Se cambio el nombre de la variable d por divProducto para mejorar la legibilidad del código
    listaDeProductos.appendChild(divProducto); // Se cambio el nombre de la variable d por divProducto para mejorar la legibilidad del código
  }
}

const filtrado = (productos = [], texto) => { // Se declara una variable llamada filtrado que es un arrow function. La función toma dos parámetros: productos (Que es un array con un valor predeterminado de un array vacío) y texto
  const textoLower = texto.toLowerCase(); // Se crea una nueva variable llamada textoLower y se le asigna el valor texto convertido a minúsculas utilizando el método toLowerCase()
  return productos.filter(item => // Se emplea la función filter para crear un nuevo array que contiene solo los elementos del array original que cumplen cierta condición                                                      
    item.tipo.toLowerCase().includes(textoLower) || // Verificamos si la propiedad "tipo" de cada elemento convertida a minúsculas incluye el texto proporcionado e "includes" devuelve un valor "true" si el texto está contenido en la cadena, el operador "||" evalúa la siguiente condición si la primera no se cumple
    item.color.toLowerCase().includes(textoLower) // Verifica si la propiedad "color" de cada elemento convertida a minúsculas incluye el texto proporcionado, también convertida a minúsculas
   );
};

displayProductos(productos);

botonDeFiltro.onclick = () => { // Se asigna una función a la propiedad onclick del elemento con la variable "botonDeFiltro"
  while (listaDeProductos.firstChild) {
    listaDeProductos.removeChild(listaDeProductos.firstChild); // Elimina el primer hijo de la listaDeProductos
  }

  const texto = inputTexto.value.trim(); // Obtiene el valor del input con el id "inputTexto", la función "trim" elimina los espacios en blanco al principio y al final
  const productosFiltrados = filtrado(productos, texto); // Se llama a una función llamada "filtrado" pasando el arreglo "productos" y el texto obtenido del input

  displayProductos(productosFiltrados); // Se llama a una función llamada "displayProductos" pasando los productos filtrados como argumento
};

