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
    let listasort = lista.sort(function(a, b){return a - b});
    if (esPar(listasort)){

        let elemento1 = listasort[mitad1];
        let elemento2 = listasort[mitad1-1];
    
        mediana = (elemento1+elemento2)/2
    
    }else{
    
        mediana = listasort[parseInt(mitad1)];
    
    }

    return mediana

}