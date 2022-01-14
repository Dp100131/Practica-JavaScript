// Helpers
let salariosCol = colombia.map(

    function (personita){

        return personita.salary;

    }
);

let salariosColSorted = salariosCol.sort(

    function (a, b){
        return a - b;
    }

);

function esPar(numero){

    return (numero%2 == 0);

}

function promedio(lista1){

    const sumaLista1 = lista1.reduce(

        function (valorAcumulado = 0, nuevoElemento){

            return valorAcumulado + nuevoElemento;

        }

    );

    let promedio = sumaLista1 / lista1.length;

    console.log(promedio)
}
// Mediana general

function medianaSalarios(lista){

    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.lendth)){

        return promedio([lista[mitad], lista[mitad-1]]);

    }else{

        return lista[mitad];
    }

}

// Mediana del Top 10%
let spliceStart = (salariosColSorted.length * (90/100));
let spliceCount = salariosColSorted.length - spliceStart; 

let salariosCOlTop10 = salariosCol.splice(spliceStart, spliceCount);


let medianaGeneralCol = medianaSalarios(salariosColSorted);
let medianaTop10Col = medianaSalarios(salariosCOlTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
});

