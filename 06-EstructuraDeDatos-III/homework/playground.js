"use strict";

const { escapeHtml } = require("markdown-it/lib/common/utils");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value
  this.left = null
  this.right = null

}

BinarySearchTree.prototype.size = function(value){

  let sum =0
  
  if(!this.left && !this.right) return sum+1

  if(this.left && !this.right){
    sum = 1 + this.left.size()
    return sum
  }
  if(!this.left && this.right){
    sum = 1 + this.right.size()
    return this.right.size()
  }

  return (this.left.size() + this.right.size())


}
BinarySearchTree.prototype.insert = function(value){
  if(value > this.value){// valor ingresado mayor al root
    if(!this.right){ // en caso de que "right" este vacio
      this.right = new BinarySearchTree(value)// agrego el nodo
    }else{
      this.right.insert(value)
    }
  }else{
    if(!this.left){
      this.left = new BinarySearchTree(value)
    }else{
      this.left.insert(value)
    }
  }
  
}
BinarySearchTree.prototype.contains = function(value){
  if(value === this.value)return true; 
  console.log("root");
  
  if(value > this.value){
    if(this.right === value){
      console.log("right");
      return true
    }else{
      console.log("rc 1");
      return this.right.contains(value)
    }
  }else{
    if(this.left === value){
      console.log("left");
      return true
    }else{
      console.log("rc 2");
      return this.left.contains(value)
    }
  }
}
BinarySearchTree.prototype.depthFirstForEach = function(){
  
}
BinarySearchTree.prototype.breadthFirstForEach = function(){
  
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};


let arbol = new BinarySearchTree(30)


arbol.insert(15)
arbol.insert(45)
arbol.insert(31)
arbol.insert(26)
arbol.insert(4)
arbol.insert(19)
arbol.insert(15)

arbol.contains(4)