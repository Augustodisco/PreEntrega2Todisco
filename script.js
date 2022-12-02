//Comienzo definiendo lo que se va a basar mi proyecto

class Producto {
    constructor(nombre, precio, descripcion, cantidad){
        this.nombre=nombre;
        this.precio=parseFloat(precio);
        this.descripcion=descripcion;
        this.cantidad=cantidad;
        this.disponibilidad = true;
    } 


}

//Creo algunas funciones que pueden llegar a servirme, como diferentes calculos para precios
function sumaiva() {
    return this.precio * 1.21;
}

function venta() {
   this.disponibilidad = false;
}

function preciodeventa () {
    return this.precio * 1.21 * 1.25;
}

//Creo un array de la/las entrada/entradas de los productos
var arrayprod = []
do{
    var entrada = prompt("Ingrese el nombre del producto a agregar o fin para terminar la operación")
    if (entrada === "Fin" || entrada === "FIN" || entrada === "fin"){
        break;
    }else{
        nmeproducto = entrada;
        var precioproducto = prompt("Ingrese el precio");
        var descripcionprod = prompt("Ingrese descripción")
        var cantproducto = prompt("Ingrese cantidad")
        arrayprod.push(new Producto(nmeproducto,precioproducto,descripcionprod,cantproducto))
    }

}

while (entrada === "Fin" || entrada === "FIN" || entrada === "fin");
console.log(arrayprod)

for (var producto of arrayprod){
    document.write("<ul><li><h2> Nombre: "+ producto.nombre + "</ul></li>");
    document.write("<ul><li><h2> Detalle: "+ producto.descripcion + "</ul></li>");
    document.write("<ul><li><h2> Cantidad: "+ producto.cantidad + "</ul></li>");
    document.write("<ul><li><h2> Precio: "+ producto.precio + "</ul></li>");
    document.write("<ul><li><h2> P. con Iva: "+ producto.sumaiva() + "</ul></li>");
    console.log(producto.nombre)
    console.log(producto.descripcion)
    console.log(producto.cantidad)
    console.log(producto.sumaiva())

}

//Si hay poco stock

var pocostock = arrayprod.filter(producto >= producto.cantidad <= 3);
console.log("Productos con poco stock, intente de nuevo")
console.log(pocostock)
document.write("<h2> Lista de productos con menos de 3 unidades : </h2>")
for (var producto of pocostock){
    document.write("<ul><li><h2> Nombre: "+ producto.nombre + "</ul></li>");
    document.write("<ul><li><h2> Detalle: "+ producto.descripcion + "</ul></li>");
    document.write("<ul><li><h2> Cantidad: "+ producto.cantidad + "</ul></li>");
    document.write("<ul><li><h2> Precio: "+ producto.precio + "</ul></li>");
    document.write("<ul><li><h2> P. con Iva: "+ producto.sumaiva() + "</ul></li>");
}


//Si directamente no tengo nada
var sinstock = arrayprod.filter(producto >= producto.cantidad == 0 || producto.disponibilidad == false);
console.log(sinstock)
document.write("<h2> Lista de productos sin stock: </h2>")
for (var producto of pocostock){
    document.write("<ul><li><h2> Nombre: "+ producto.nombre + "</ul></li>");
    document.write("<ul><li><h2> Detalle: "+ producto.descripcion + "</ul></li>");
    document.write("<ul><li><h2> Cantidad: "+ producto.cantidad + "</ul></li>");
    document.write("<ul><li><h2> Precio: "+ producto.precio + "</ul></li>");
    document.write("<ul><li><h2> P. con Iva: "+ producto.sumaiva() + "</ul></li>");
}

//Si quiero un producto, lo busco por nombre.
var buscar = prompt("Ingrese el producto a buscar");
var prodbuscar = arrayprod.filter(producto >= producto.nombre.includes(buscar));
console.log(prodbuscar);
document.write("<h2> Productos a buscar : </h2>")
for (var producto of prodbuscar){
    document.write("<ul><li><h2> Nombre: "+ producto.nombre + "</ul></li>");
    document.write("<ul><li><h2> Detalle: "+ producto.descripcion + "</ul></li>");
    document.write("<ul><li><h2> Cantidad: "+ producto.cantidad + "</ul></li>");
    document.write("<ul><li><h2> Precio: "+ producto.precio + "</ul></li>");
    document.write("<ul><li><h2> P. con Iva: "+ producto.sumaiva() + "</ul></li>");
}

//La lista de mis productos ordenada por cantidad

var orden = [];
orden = arrayprod.map(elemento >= elemento);
orden.sort (function (a,b) {
    return a.cantidad - b.cantidad


});

console.log("Orden ascendente");
console.log(orden)
document.write("<h2> Lista de productos ordenada por cantidad : </h2>")
for (var producto of orden){
    document.write("<ul><li><h2> Nombre: "+ producto.nombre + "</ul></li>");
    document.write("<ul><li><h2> Detalle: "+ producto.descripcion + "</ul></li>");
    document.write("<ul><li><h2> Cantidad: "+ producto.cantidad + "</ul></li>");
    document.write("<ul><li><h2> Precio: "+ producto.precio + "</ul></li>");
    document.write("<ul><li><h2> P. con Iva: "+ producto.sumaiva() + "</ul></li>");
}













