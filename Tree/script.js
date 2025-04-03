const prompt = require("prompt-sync")({sigint:true});
class Node{
    constructor(val){
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
        let newNode = new Node(data)
        console.log("enter left child for"+data);
        newNode.left = this.createTree()
        console.log("enter right child for"+data);
        newNode.right = this.createTree()
        return newNode
        
    }
    preorder(root){
        if(root == null)return
        process.stdout.write(root.val+" ")
        this.preorder(root.left)
        this.preorder(root.right)
    }
    postorder(root){
        if(root == null)return
        this.postorder(root.left)
        this.postorder(root.right)
        process.stdout.write(root.val+" ")
    }
    inorder(root){
        if(root == null)return
        this.inorder(root.left)
        process.stdout.write(root.val+" ")
        this.inorder(root.right)
    }
}

let obj = new Tree()
obj.root = obj.createTree()
obj.preorder(obj.root)
obj.postorder(obj.root)
obj.inorder(obj.root)