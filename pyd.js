
const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = (100 - descuento)/100;

const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento);

/* console.log({

    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
}) */

function calcularPrecioConDescuento(precio, descuento){

    let porcentajePrecioConDescuento = (100 - descuento)/100;
    let precioConDescuento = (precio * porcentajePrecioConDescuento);
    
    return precioConDescuento;

}

function cPcD(){

    let precio = document.getElementById("precioProducto").value;
    let descuento = document.getElementById("descuentoProducto").value;

    let PcD = calcularPrecioConDescuento(precio, descuento); 

    let resultP = document.getElementById("resultP");

    resultP.innerText= "El precio del producto con descuento es: $"+ PcD;
}
