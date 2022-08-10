'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
let sum = 0;
 for(let i =0; i<num.length; i++){
   sum += +num[i] * 2 ** (num.length - 1- i)
 }
 return sum
}

function DecimalABinario(num) {
  // tu codigo aca
  let res = []
  while(num!==0){
    let residuo = parseInt(num%2)
    num= Math.floor(num/2);
    res.push(residuo)

  }
   return res.reverse().join('')
    
  
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}