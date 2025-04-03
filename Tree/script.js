const prompt = require("prompt-sync")({sigint:true});
class Node{
    constructor(){
        this.val = val
        this.left = this.right = null
    }
}

class Tree{
    constructor(){
        this.root = null
    }
    createTree(){
        let data = Number(prompt("enter val : "))
        if(data == -1)return null
        this.root = new Node(data)
        console.log("enter left child for"+data);
        this.root.left = this.createTree()
        console.log("enter right child for"+data);
        this.root.right = this.createTree()

        
    }
}

let obj = new Tree()
obj.createTree()