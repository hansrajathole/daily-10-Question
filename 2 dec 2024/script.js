


let obj ={
    name : "sahil",
    age : 22,
   
}
function getsum(a,b){

    console.log(this);
    console.log(a,b);
    
    
}
getsum.apply(obj,[1,2])
