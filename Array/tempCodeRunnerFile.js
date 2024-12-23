let arr =  [2,4,6,8,10]
let tp = 0
for(let i = 0 ; i<arr.length-1 ; i++){
    for(let j = i + 1 ; j<arr.length ; j++){
        console.log("("+arr[i]+","+arr[j]+")");
        tp++
    }
}
console.log(tp);
