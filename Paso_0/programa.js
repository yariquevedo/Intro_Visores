// foreach: recorre un iterable: devuelve el indice y el valor
// ejecutar uan función
let arreglo = [4,5,6,7];

arreglo.forEach( (indice, valor)=> {
    console.log(valor)
}
)

// map: Función que permite aplicar una función a cada elemento del arreglo, más simple de ejecutar
//Devuelve un arreglo
function calcularCuadrado(valor){
    return valor**2;
};
let cuadrados = arreglo.map(calcularCuadrado);

//Imprimir cuadrado
cuadrados.forEach((valor, indice)=>{
    console.log(valor);
});

//Filter
function mayor50(valor){
    return valor > 50
}
//; para separación de sentencias el espacio también funciona
let mayores50 = cuadrados.filter(mayor50);
console.log(mayores50);

console.warn("mensaje")
console.error("mensaje")

//Slice (2 y 4 son índices)
let parte = arreglo.slice(2,4)
console.log(arreglo)
console.info(parte)