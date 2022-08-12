class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top=null
        this.bottom=null;
        this.size=0
    }
    peek(){}
    push(data){
        let nuevoNodo = new Node(value)
        if(this.size ===0){
            this.top = nuevoNodo;
            this.bottom = nuevoNodo
        }else{
            let currentTop = nuevoNodo
            nuevoNodo.next=currentTop
        }
        this.size++
    }
    pop(){}
}

let miStack = new Stack()
miStack.push('Chris')

console.log(miStack);