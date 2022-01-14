function laModa(lista1){

    let lista1count = {};

    lista1.map(
        function (elemento){
            
            if (lista1count[elemento]){
                lista1count[elemento] += 1;
            }else{
                lista1count[elemento] = 1;
            }
            

        }
    );

    let lista1Array = Object.entries(lista1count).sort(
        function (valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    let moda = lista1Array[lista1Array.length - 1]
    
    return moda;

}
