const prompt = require("prompt-sync")({sigint: true});
//======================================================================
// ========================== insertion sort ===========================

//     let arr = [12, 11, 13, 5, 6];
//     for (let i = 1; i < arr.length; i++) {
//         let key = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j = j - 1;
//         }
//         arr[j + 1] = key;
//     }

// console.log(arr);


//====================================================================
//========================== selection sortt =========================

// let arr = [7, 4, 3, 5, 6, 9,8]
// for(let i = 0 ; i<arr.length-1 ; i++){
//     minIndex = i
//     for(let j = i + 1 ; j<arr.length ; j++){
//         if(arr[j]<arr[minIndex]){
//             minIndex = j
//         }
//     }
//     let temp = arr[minIndex]
//     arr[minIndex] = arr[i]
//     arr[i] = temp

// }
// console.log(arr);
 


//==================================================================
//========================= bubble sort ============================

// let arr = [7, 4, 3, 5, 6, 9,8]
// for(let i = 0 ; i<arr.length-1 ;i++){
//     for(let j = 0 ; j<arr.length-i-1 ;  j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1] 
//             arr[j+1] = temp  
//         }
//     }
// }

// console.log(arr);


//==================================================================
//========================= merge sort =============================
// let arr = [9, 6, 10, 3, 8, 1]

// divide(arr, 0 , arr.length-1)
// function divide(arr, first , last) {
//     if(first<last){
//         let mid = first + Math.floor((last-first)/2)
//         divide(arr, first, mid)
//         divide(arr, mid+1, last)
//         conquer(arr, first, mid, last)
//     }
    
// }

// function conquer(arr, first, mid, last) {
//     let newArr = new Array(last-first+1)
//     let i = first
//     let j = mid+1
//     let k = 0

//     while(i<=mid && j<=last){
    
//         if(arr[i]<arr[j]){
//             newArr[k++] = arr[i++]
//         }else{
//             newArr[k++] = arr[j++]
//         }
//     }

//     while(i<=mid){
//         newArr[k++] = arr[i++]
//     }
    
//     while(j<=last){
//         newArr[k++] = arr[j++]
//     }

//     for(let i = 0 ; i<newArr.length ; i++){
//         console.log(newArr[i])
//     }
//     console.log(" ");
    

    
//     for(let i = 0 ,j = first ; i<newArr.length ; i++, j++){
//         arr[j] = newArr[i]
//     }
//     console.log(first ," ", last);
    
// }

// console.log(arr);


//================================================================
