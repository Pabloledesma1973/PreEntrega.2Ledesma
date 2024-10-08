// Función para agregar un producto
function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    let cantidad = parseInt(prompt("Ingrese la cantidad disponible:"));
    
    if (isNaN(precio) || precio < 0 || isNaN(cantidad) || cantidad < 0) {
        alert("Por favor, ingrese un precio y cantidad válidos.");
        return;
    }
    
    let producto = new Producto(nombre, precio, cantidad);
    productos.push(producto);
    alert(`Producto ${nombre} agregado a la tienda.`);
}

// Función para mostrar la lista de precios
function mostrarListaPrecios() {
    if (productos.length === 0) {
        alert("No hay productos en la tienda.");
        return;
    }
    let lista = "Lista de precios:\n";
    productos.forEach((producto, index) => {
        lista += `${index + 1}. ${producto.nombre} - $${producto.precio.toFixed(2)} (Cantidad disponible: ${producto.cantidad})\n`;
    });
    alert(lista);
}

// Función para comprar un producto
function comprarProducto() {
    mostrarListaPrecios();
    let indice = parseInt(prompt("Ingrese el número del producto que desea comprar:")) - 1;
    if (indice < 0 || indice >= productos.length) {
        alert("Producto no válido.");
        return;
    }

    let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
    if (isNaN(cantidad) || cantidad < 1) {
        alert("Por favor, ingrese una cantidad válida.");
        return;
    }

    // Verificar si hay suficiente cantidad
    if (cantidad > productos[indice].cantidad) {
        alert(`No hay suficientes unidades de ${productos[indice].nombre}. Solo quedan ${productos[indice].cantidad} unidades.`);
        return;
    }

    // Restar la cantidad comprada de la cantidad disponible
    productos[indice].cantidad -= cantidad;
    
    alert(`Ha comprado ${cantidad} unidad(es) de ${productos[indice].nombre} por un total de $${(productos[indice].precio * cantidad).toFixed(2)}.`);
}

// Función para borrar un producto
function borrarProducto() {
    mostrarListaPrecios();
    let indice = parseInt(prompt("Ingrese el número del producto que desea borrar:")) - 1;
    if (indice < 0 || indice >= productos.length) {
        alert("Producto no válido.");
        return;
    }
    productos.splice(indice, 1);
    alert("Producto borrado con éxito.");
}

// Función principal para el menú
function menu() {
    while (true) {
        let opcion = prompt("Seleccione una opción:\n1. Agregar producto\n2. Mostrar lista de precios\n3. Comprar producto\n4. Borrar producto\n5. Salir");
        
        switch (opcion) {
            case '1':
                agregarProducto();
                break;
            case '2':
                mostrarListaPrecios();
                break;
            case '3':
                comprarProducto();
                break;
            case '4':
                borrarProducto();
                break;
            case '5':
                alert("Gracias por visitar la tienda. ¡Hasta luego!");
                return;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }
    }
}