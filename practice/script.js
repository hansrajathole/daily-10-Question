//======================================
//----find that array is shorted or not

// let arr = [1,4,6,7,9,25,56,60]
// let ans = false
// for(let i = 0 ; i<arr.length-1 ; i++){
//     if(arr[i+1]<arr[i]){
//         ans = true
//         break
//     }
// }
// if(ans){
//     console.log("this array is not shorted");
// }else{
//     console.log("this array is shorted"); 
// }



//=======================================
//---- left rotation by one step --------

// let arr = [10,20,30,40,50,60]
// let temp = arr[arr.length-1]
// for(let i = arr.length-1 ; i>0 ; i--){
//     arr[i] = arr[i-1]
// }
// arr[0] = temp
// console.log(arr);




//======================================
//----- right rotation by on step ------


// let arr = [10,20,30,40,50,60]
// let temp = arr[0]
// for(let i = 0 ; i<arr.length-1 ; i++){
//     arr[i] = arr[i+1]
// }
// arr[arr.length-1] = temp
// console.log(arr);




//=====================================
//reverse array by two pointer algorithm

// let arr = [10,20,30,40,50,60]

// let left = 0
// let right = arr.length-1
// while(left<right){
//     let temp = arr[left]
//     arr[left] = arr[right]
//     arr[right] = temp
//     left++
//     right--
// }
// console.log(arr);



//======================================
//------right rotation by k times ------
// let arr = [10,20,30,40,50,60]
// let k = 3
//     for(let n = 0 ; n<k ; n++){
//         let temp = arr[0]
//         for(let i = 0 ; i<arr.length-1 ; i++){
//             arr[i] = arr[i+1]
//         }
//         arr[arr.length-1] = temp
// }
// console.log(arr);

