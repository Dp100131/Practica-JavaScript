let lista1 = [
    100, 
    200,
    500, 
    4000000,
];

const mitad1 = (lista1.length/2);


function esPar(lista){

    if ((lista.length)%2 == 0){

        return true

    }else{
    
        return false
    
    } 

}

function laMediana(lista){

    let mediana;

    if (esPar(lista)){

        let elemento1 = lista[mitad1];
        let elemento2 = lista[mitad1-1];
    
        mediana = (elemento1+elemento2)/2
    
    }else{
    
        mediana = lista[parseInt(mitad1)];
    
    }

    return mediana

}