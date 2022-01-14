function promedio(lista1){

    const sumaLista1 = lista1.reduce(

        function (valorAcumulado = 0, nuevoElemento){

            return valorAcumulado + nuevoElemento;

        }

    );

    let promedio = sumaLista1 / lista1.length;

    console.log(promedio)

}