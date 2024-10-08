// Definición de la clase Producto
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad; // Añadimos la cantidad disponible
    }
}

// Array para almacenar los productos
let productos = [];



// Iniciar el menú
menu();
