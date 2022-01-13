
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

