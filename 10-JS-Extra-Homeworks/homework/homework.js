// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var nuevoArreglo = []
  for(clave in objeto){
     clave, objeto [clave]
     nuevoArreglo.push([clave, objeto[clave]])
  }
  return nuevoArreglo
  
       
    //return objeto.entries (objeto)  buscar "entries en google"
  
} 


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
var caracteres = {}
for (let i = 0; i < string.length; i++) {
  if(caracteres.hasOwnProperty(string[i])){
    caracteres[string[i]] += 1;
  }

else{
  caracteres[string[i]] = 1
}
}
return caracteres
// preguntar por este

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
 var mayusculas = ""
 var minusculas = ""
 for (let i = 0; i < s.length; i++) {
   if (s[i] === s[i].toUpperCase()){
     mayusculas += s[i]
    }
     else {
     minusculas +=s[i]
   }
 } 
   return mayusculas + minusculas
    
  


}
function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
var cambios = str.split(" ").map(function(el){  // split divide los valores de un string en un array
return el.split("").reverse().join("");
})
return cambios.join(" ");

} 

// Split divide los elementos de un string en un array==>"culo"[c,u,l,o"]
// reverse invierte los ordenes de los elementos ==>[o,l,u,c]
// join une los elementos de un array en un string ==> "oluc"
// las comillas del segundo punto van sin espacio ya que mostrará los elementos separados
//.join convertirá los elementos del array en un string


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
let cadena= numero.toString()   //==> se usa para cambiar en una variable los valores numericos en strings
let cadenainver= ""
cadenainver = cadena.split("").reverse().join("")
if (cadena === cadenainver){
   return "Es capicua"
}
else {
  return "No es capicua"
}


}


//primero los separa, luego los revierte, luego los agurpa

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
let rsp =""
for (let i = 0; i < cadena.length; i++){
if(cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c"){
  rsp += cadena[i]

 
  }
}
return rsp
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  return arr.sort((a,b)=>a.length - b.length)
}
// 


// su a-b es negativo, primero va "a".
                                           

// si A-b es positivo, primero va el "b"

// Otro
// var (cambio)true
//while cambio {
//for (var i= 0; i < arr ++1)
// if (arr[i].length > arr[i +1].length){
// var aux = arr[i]
//arr[i] =arr[i+1]
//arr[i+1]= aux
//cambio= true
//  }
// }
//}
// return arr
         

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  let int = []

  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if(arreglo1[i] === arreglo2[j]){
         int.push(arreglo2[j])
     };
      
    }
  
  } return int
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
}
