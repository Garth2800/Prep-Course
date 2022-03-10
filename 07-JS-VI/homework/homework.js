// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

  //return nombre.toUpperCase[0] + nombre.slice(1)

  return nombre.charAt(0).toUpperCase() + nombre.slice(1)

  //slice: corta el caracter en el string que designemos en los parentesis
  // CharAt: Extrae un elemento en un string que le designemos en el parentesis.
  //toUpperCase: toma un caracter y lo modifica como mayuscula-
  //Nota: investigar un poco más sobre CharAt y Slice.

 

}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb()

  // Callback (cb) es una función en la que pasamos un parámetro dentro de una función

}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números .
  //Errata: NO SABEMOS que tipo de función matemática se usa. 
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
return cb (n1, n2)

//Ejemmplo: En el caso de que se plantee que sea una suma:
// function cb (n1, n2){
//return n1 + n2}


}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  let suma = numeros.reduce(function (ac, elemento){
    return ac + elemento}, 0)
  
  cb (suma)

// Elemento Reduce: Si se tiene un acumulador incluido, toma el elemento acumulado y lo reduce.
// Ac: Acumulador. Por defecto hace referencia al primer elemento del array. En este
//caso, lo que nos devuelve es que, se suma el punto 0 del array por otro elemento designado
// Nota: Se puede agregar al final del regreso (Antes de cerrar la función) desde que punto del Array
// a partir del cual queremos comenzar la acumulación)

}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  //for (let i = 0; i < array.length; i++) {
 //   cb(array[i]);

 array.forEach(function(el){
   cb(el)
 })
    
//array.firEacg (el=>cb(el))




  //forEach (Para cada)
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
var nuevoarray = array.map(function (elemento){;
  return cb(elemento)})

  return nuevoarray

}
// map: hace lo mismo que haría aplicando un for, un callback y un pusheo al elemento en cuestión
// crea una variable y hace un push a cada elemento que se aplica a una función. 


function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var coincidencias = array.filter(function (elemento){
    return elemento[0] === "a"
  })
  return coincidencias

}
// filter: hace un filtro en base a una proposición (como, por ejemplo, en un array te pida extraer 
// nombres con una letra o un dato que se especifique. En consecuencia, devuelve un nuevo arreglo) 



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
