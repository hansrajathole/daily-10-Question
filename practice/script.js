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




//=======================================
//----- left rotation by k times --------

// let arr = [10,20,30,40,50,60]
// let k = 3
// for(let n = 0 ; n<k ; n++){
//     let temp = arr[arr.length-1]
//     for(let i = arr.length-1 ; i>0 ; i--){
//         arr[i] = arr[i-1]
//     }
//     arr[0] = temp
// }
// console.log(arr);



//========================================
//--sift all negative number in right side

// let arr = [10,12,-5,-6,8,-3,7]
// let neg = arr.length-1
// for(let i = arr.length-1 ; i>0 ; i--){
//     if(arr[i]<0){
//         let temp = arr[neg]
//         arr[neg] = arr[i]
//         arr[i] = temp
//         neg--
//     }
// }
// console.log(arr);


//========================================
//------sift all zero in right side-------

// let arr = [1,0,0,1,1,0,1]
// let neg = arr.length-1
// for(let i = arr.length-1 ; i>0 ; i--){
//     if(arr[i]<1){
//         let temp = arr[neg]
//         arr[neg] = arr[i]
//         arr[i] = temp
//         neg--
//     }
// }
// console.log(arr);



//============================================
//----find the maximum pair count of one -----

// print by using method
// let arr = [1,1,0,0,1,1,0,1,1,1,0,1]
// let max = 0
// let count = 0
// for(let i = 0 ; i<arr.length ;i++){
//     if(arr[i]===1){
//         count++
//         max = Math.max(max,count)
//     }
//     else{
//         count = 0
//     }
// }
// console.log(`maximum pair of one ${max}`);




// print without using method
// let arr = [1,1,0,0,1,1,0,1,1,1,0,1]
// let store = 0
// let count = 0
// for(let i = 0 ; i<arr.length ;i++){
//     if(arr[i]===1){
//         count++
//     }
//     else{
//         if(count>store){
//             store = count
//             count = 0
//         }else{
//             count = 0
//         }
//     }
// }
// console.log(`maximum pair of one ${store}`);




//==============================================
//---------Linear search algorithm -------------

// let arr = [2,4,6,8,9,10,55,66,34,90]
// let x =  67
// let index = -1
// for(let i = 0 ; i<arr.length ; i++){
//     if(arr[i]===x){
//         index = i
//         break        
//     }
// }

// if(index === -1){
//     console.log(x+" is not axist");
// }else{
//     console.log(x+" is found at "+index);
// }`



//=============================================
//------------binary search -------------------

// let arr = [10,20,30,40,50,60]
// let n = 60
// let start = 0 
// let end = arr.length-1
// while(1){
//     let mid = Math.floor((start+end)/2)
//     if(arr[mid]===n){
//          console.log(mid);
//          break
//     }
//     else if(arr[mid]<n){
//         start = mid+1
//     }
//     else{
//         end = mid-1
//     }
// }

