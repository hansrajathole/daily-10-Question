//======================================================
// --------------------Question no.1 -------------------
// binary search

// let arr = [2,5,7,10,14,16,17,30 ,35 ,40]
// let searchElement = 30
// function BinarySearch(searchElement){
//     let start = 0; let end = arr.length-1
//     while(start<=end){
//         let mid = Math.floor((start+end)/2)
//         if(arr[mid]===searchElement)return mid
//         else if(arr[mid]>searchElement) end = mid-1
//         else start = mid+1
//     }
//     return -1
// }

// let ans = BinarySearch(searchElement)
// if(ans === -1){
//     console.log("not found");
// }else{
//     console.log("found at "+ ans);
// }
