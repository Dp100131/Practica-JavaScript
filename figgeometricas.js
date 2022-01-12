// Constantes

const LC = 5;
const LT1 = 6;
const LT2 = 6;
const LT3 = 4;
const H = 5.5;
const R = 4;
const PI = Math.PI;

//Funciones


function perimetroCuadrado(L){

    return L * 4;

}

function areaCuadrado(L){

    return L**2;

}

function perimetroTriangulo(l1, l2, b){

    let suma = parseInt(l1, 10) + parseInt(l2, 10) + parseInt(b, 10);

    return suma;

}

function areaTriangulo(h, b){

    return (h*b)/2;

}

function diametroCirculo(radio){

    return (parseInt(radio, 10))*2;

}

function perimetroCirculo(radio){

    let diametro = diametroCirculo(radio);
    return diametro * PI;

}

function areaCirculo(radio){

    return PI * (radio**2);

}

//  Cuadrado

console.group('Cuadrado');

console.log('Los lados del cuadrado miden: '+ LC + ' [cm]');

let PC = perimetroCuadrado(LC);

console.log('El perimetro del cuadrado es: '+ PC + ' [cm]');

let AC = areaCuadrado(LC);

console.log('El área del cuadrado es: '+ AC + ' [cm^2]');
console.groupEnd();


//  Triangulo
console.group('Triángulo');

console.log(
    'Los lados del triángulo miden: '
    + LT1 
    + ' [cm], ' 
    + LT2 
    + ' [cm] y ' 
    + LT3 
    + ' [cm]'
    );

console.log(
    'La altura del triángulo es: '
    + H 
    + ' [cm], ' 
);

let PT = perimetroTriangulo(LT1, LT2, LT3);

console.log('El perimetro del triángulo es: '+ PT + ' [cm]');

let AT = areaTriangulo(H, LT3);

console.log('El área del triángulo es: '+ AT + ' [cm^2]');
console.groupEnd();

// Circulo
console.group('Circulo');
let D = diametroCirculo(R);

console.log('El radio del circulo mide: '+ R + ' [cm]');

let PCC = perimetroCirculo(R);
console.log('El perimetro del circulo es: '+ PCC + ' [cm]');

let ACC = areaCirculo(R);
console.log('El área del cuadrado es: '+ ACC + ' [cm^2]');

console.groupEnd();

/* funciones para la página */

function calcularperimetrocuadrado(){

    const input = document.getElementById("ladoCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es: " + perimetro + " [cm]")
    
}

function calcularareacuadrado(){

    const input = document.getElementById("ladoCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El area del cuadrado es: " + area + " [cm^2]")
    
}

/* Funciones para el truangulo */

function calcularperimetrotri(){

    const INPUT1 = document.getElementById("ladoTriangulo1");
    const INPUT2 = document.getElementById("ladoTriangulo2");
    const INPUT3 = document.getElementById("ladoTriangulo3");

    const LADO1 = INPUT1.value;
    const LADO2 = INPUT2.value;
    const LADO3 = INPUT3.value;

    const P = perimetroTriangulo(LADO1, LADO2, LADO3);

    alert("El perimetro del triángulo es: " + P + " [cm]")

}

function calcularareatri(){

    const INPUT3 = document.getElementById("ladoTriangulo3");
    const INPUT4 = document.getElementById("altura");

    const LADO3 = INPUT3.value;
    const H = INPUT4.value;

    const A = areaTriangulo(H, LADO3);
    
    alert("El área del triángulo es: " + A + " [cm^2]")

}

/* Funciones para el circulo */

function calcularperimetroc(){

    const input = document.getElementById("radio");

    const r = input.value;

    const P = perimetroCirculo(r);
    alert("El perimetro del circulo es: "+ P + " [cm]")


}

function calcularareac(){

    const input = document.getElementById("radio");

    const r = input.value;

    const A = areaCirculo(r);
    alert("El área del circulo es: "+ A + " [cm^2]")
    

}

function calculardiametroc(){

    const input = document.getElementById("radio");

    const r = input.value;

    const D = diametroCirculo(r);
    alert("El diametro del circulo es: "+ D + " [cm]")

}