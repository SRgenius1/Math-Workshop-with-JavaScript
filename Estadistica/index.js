const platziMath = {};
// console.log(platziMath);

platziMath.esPar = function esPar(lista) {
    return !(lista.length % 2);
} 

platziMath.esImpar = function esImpar (lista) {
    return lista.length % 2;
}

platziMath.calcularModa = function calcularModa (lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];

        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }
    
    const listaArray = Object.entries(listaCount);
    console.log(listaCount, listaArray);

    const listaOrdenada = ordenarListaBidimencional(listaArray, 1);
    const listaOrdenadaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
    console.log('La moda es: ' + listaOrdenadaMaxNumber[0]);
}

platziMath.calcularMediana = function calcularMediana (listaDesordenada) {
    const lista = platziMath.ordenarLista(listaDesordenada);
    const listaEsPar = platziMath.esPar(lista);

    if (listaEsPar) {
        const mitad1ListaPar = lista[(lista.length / 2) - 1];
        const mitad2ListaPar = lista[lista.length / 2];

        const listaMitades = [mitad1ListaPar,mitad2ListaPar];

        return platziMath.calcularPromedioLista(listaMitades);
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2) + 1;
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        return medianaListaImpar;
    }

}

platziMath.calcularPromedioLista = function calcularPromedioLista (lista) {

    const sumaLista = lista.reduce((a,b) => a + b);
    // console.log(sumaLista);

    const promedio = sumaLista / lista.length;
    return promedio;
}

platziMath.ordenarLista = function ordenarLista (listaDesordenada) {

    const lista = listaDesordenada.sort((a,b) => a - b);

    return lista;
}

platziMath.ordenarListaBidimencional = function ordenarListaBidimencional (listaDesordenada, i) {

    const lista = listaDesordenada.sort((a,b) => a[i] - b[i]);

    return lista;
}


