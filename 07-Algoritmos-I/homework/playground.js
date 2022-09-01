//EXPLICACION SELECTION SORT
//[1, 5, 4, 2, 8]
//    A
//    i
//       j

function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    for (let i = 0; i < array.length; i++) {
      let min = i
      for (let j = i+1; j < array.length ; j++) {
        if(array[j]<array[min]){
          min = j  
        }
        
      }
      let aux = array[i]
      array[i] = array[min]
      array[min] = aux
  }
    console.log(array);
  
  }

let fc = new selectionSort([5, 1, 4, 2, 8, 9])


//   describe('selectionSort(array)', function() {
//     it('Debe retornar el array ordenado de menor a mayor', function() {
//       expect(selectionSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
//       expect(selectionSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
//       expect(selectionSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);
//     });
//   });
  
// function insertionSort(array) {
//   // Implementar el método conocido como insertionSort para ordenar de menor a mayor
//   // el array recibido como parámetro utilizando arreglos
//   // Devolver el array ordenado resultante
//   // Tu código:
//   for (let i = 0; i < array.length +1; i++) {
//       for (let j = 0; j < array.length; j++) {
//         if (array[i]< array[j]) {
//           let aux = array[j]
//           array[j] = array[i]
//           array[i] = aux
//         }else{
//           array[i+1]
//           array[j+1]
//         }
//       }
//   }
//   console.log(array);

// }
// let arr = new insertionSort([5, 1, 4, 2, 8])