function promedio(lista1){

    /* let sumaLista1 = 0;

    for (let i = 0; i < lista1.length; i++){

    sumaLista1 += lista1[i];

    } */

    const sumaLista1 = lista1.reduce(

        function (valorAcumulado = 0, nuevoElemento){

            return valorAcumulado + nuevoElemento;

        }

    );

    let promedio = sumaLista1 / lista1.length;

    console.log(promedio)

}