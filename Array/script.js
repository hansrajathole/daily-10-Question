
//====================================================
//====================================================
// --------------- Right 1 elem rotate----------------
// let arr = [10, 20, 30, 40, 50]
// let temp = arr[0]

// for(let i = 0 ; i<arr.length-1 ; i++){
//         arr[i]=arr[i+1]
//     }
//     arr[arr.length-1] = temp
//     console.log(arr);
    
    



//====================================================
//====================================================
//-----------------left 1 elem rotate ----------------

// let arr = [10, 20, 30, 40, 50]
// let  temp =  arr[arr.length-1]

// for(let i = arr.length-1 ; i>0 ; i--){
//     arr[i]=arr[i-1]

// }
// arr[0] = temp
// console.log(arr);



//====================================================
//====================================================
//----------------- Rotate left to right of n times

let arr = [10, 20, 30, 40, 50]
let n =2
for(let k =1 ; k<= n ; k++){
    let  temp =  arr[0]
    for(let i = 0 ; i<arr.length-1; i++){
        arr[i]=arr[i+1]
    }
    arr[arr.length-1] = temp
}
console.log(arr);