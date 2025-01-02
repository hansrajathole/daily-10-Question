const prompt = require("prompt-sync")({sigint:true});

//====================================================
//----------------- Hard Coded -----------------------

// let arr = [
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12]
// ]

// for(let i =0  ;i<arr.length ; i++){
//     console.log("array of ",i);
//     for(let j = 0 ; j<arr[i].length ; j++){
//         process.stdout.write((arr[i][j])+" ");
//     }
//     console.log();
// }

//=====================================================
//------------------ 2D Array dynamic -----------------
// 3*4
let row = 3
let cals = 3
let arr = Array.from({length: row},()=>Array(cals).fill(0))
console.log(arr);

for(let i = 0 ; i<row ;i++){
    for(let j = 0 ; j<cals; j++){
        arr[i][j] = Number(prompt("enter number"+i+" "+j+" :")) 
    }
}
// console.log(arr);
let Leftsum=0
let Rightsum = 0
for(let i = 0 ; i<arr.length ; i++){
    for(let j = 0 ; j<arr[i].length ; j++){
        if(i==j ){
            Leftsum+= arr[i][j]
        }
        if(i+j== arr.length-1){
            Rightsum += arr[i][j]
        }
    }
}
console.log(arr);

console.log(Leftsum);
console.log(Rightsum);


//=====================================================
//------------Jagged Array input ----------------------
// let rows = Number(prompt("enter rows"))
// let arr = new Array(3)

// for(let i = 0 ; i<arr.length ; i++){
//     let cols  = Number(prompt("enter cals ",i ))
//     arr[i] = new Array(cols).fill(0)
// }
// console.log(arr);
// for(let i = 0 ; i<arr.length ;i++){
//     for(let j = 0 ;j<arr[i].length ; j++){
//         arr[i][j] = Number(prompt(`Enter ${i}st index ${j}st index :`))
//     }
// }
// console.log(arr);
