'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //Caso base 
  if(array.length <=1)return array;
  //algoritmo
  let pivot = array[0]
  let right=[]
  let left=[]

  for (let i = 1; i < array.length; i++) {
    if(array[i]>pivot){
      right.push(array[i])
    }else{
      left.push(array[i])
    }
  }
  return quickSort(left).concat(pivot).concat(quickSort(right))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array 

  let mitad = Math.floor(array.length/2)

  let left=array.slice(0,mitad)
  let right=array.slice(mitad)

  return merge(mergeSort(left), mergeSort(right))
}


function merge(left,right){
let leftI=0
let rightI=0
let arrOrdered=[]

while(leftI<left.length && rightI<right.length){
  if (left[leftI] < right[rightI]){
    arrOrdered.push(left[leftI])
    leftI++
  } else{
    arrOrdered.push(right[rightI])
    rightI++
  }
}
return arrOrdered.concat(left.slice(leftI)).concat(right.slice(rightI))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
