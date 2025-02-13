const prompt = require("prompt-sync")({sigint: true});
//======================================================================
// ========================== insertion sort ===========================

//     let arr = [12, 11, 13, 5, 6];
//     for(let i = 1 ; i<arr.length ; i++){
//         let key = arr[i];
//         let j = i-1
//         while(j>= 0 && arr[j]>key){
//             arr[j+1] = arr[j];
//             j--
//         }
//         arr[j+1] = key
//     }

// console.log(arr);


//====================================================================
//========================== selection sort  =========================

// let arr = [7, 4, 3, 5, 6, 9,8]

// for(let i = 0 ; i<arr.length-1 ; i++){
//     let minIndex = i
//     for(let j = i+ 1 ; j<arr.length ; j++){
//         if(arr[j]< arr[minIndex]){
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

// let arr = [5,4,1,3,2]

// for(let i = 0 ; i<arr.length-1 ; i++){
//     for(let j = 0 ; j<arr.length-i-1 ; j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] =temp
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
    
//         if(arr[i]<arr[j]) newArr[k++] = arr[i++]
//         else newArr[k++] = arr[j++]
//         
//     }
//     while(i<=mid){
//         newArr[k++] = arr[i++]
//     }
//     while(j<=last){
//         newArr[k++] = arr[j++]
//     }
//     for(let i = 0 ,j = first ; i<newArr.length ; i++, j++){
//         arr[j] = newArr[i]
//     }
// }

// console.log(arr);


//================================================================
// ======================= queck sort ============================

// let arr = [9, 6, 10, 3, 8, 1]

// quickSort(arr, 0, arr.length-1)

// function quickSort(arr, first, last) {
//     if(first<last){
//         let pi = partition(arr, first, last)
//         console.log(pi);
        
//         quickSort(arr, first, pi-1)
//         quickSort(arr, pi+1, last)
//     }
// }

// function partition(arr, first, last) {
//     let pivot = arr[last]
//     let i = first - 1
//     for(let j = first ; j<last; j++){
//         if(arr[j]<pivot){
//             i++
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
//     i++
//     let temp = arr[i]
//     arr[i] = arr[last]
//     arr[last] = temp
//     return i
// }

// console.log(arr);



//===========================================================
//=========================== Cyclic sort ====================

// let arr = [1, 5, 6, 4, 3, 2, 8, 7]

// cyclicSort(arr)

// function cyclicSort(arr) {
//     let n = arr.length
//     let i = 0
//     while( i < n) {
//         let correctIndex = arr[i] - 1
//         if (arr[i] != arr[correctIndex]) {
//             let temp = arr[i]
//             arr[i] = arr[correctIndex]
//             arr[correctIndex] = temp
//             correctIndex = arr[i] - 1
//         }else{
//             i++
//         }
//     }
//     console.log(arr)
// }

// console.log(arr);


//=============================================================
//=================== Counting Sort ===========================


// let arr = [1,4,1,3,2,4,3,7]

// let largest = -Infinity
// for(let i = 0 ; i<arr.length ; i++){
//     if(arr[i]>largest) largest = arr[i]
// }

// let newArr = new Array(largest+1).fill(0)
// for(let i = 0 ; i<arr.length ; i++){
//     newArr[arr[i]]++
// }
// console.log(newArr);

// let j = 0
// for(let i = 0 ; i<arr.length ; i++){
//     while(newArr[i]>0){
//         arr[j] = i
//         j++
//         newArr[i]--
//     }
// }

// console.log(arr);
