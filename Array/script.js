const prompt = require("prompt-sync")({sigint: true});
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
//----------------- Rotate right to left of n times

// let arr = [10, 20, 30, 40, 50]
// let n =2
// for(let k =1 ; k<= n ; k++){
//     let  temp =  arr[0]
//     for(let i = 0 ; i<arr.length-1; i++){
//         arr[i]=arr[i+1]
//     }
//     arr[arr.length-1] = temp
// }
// console.log(arr);





//====================================================
//====================================================
//----------------- Rotate left to right of n times

// let arr = [10, 20, 30, 40, 50]
// let n =2
// console.log(arr);

// for(let i =1 ; i<=n ; i++){
//     let temp = arr[arr.length-1]
//     for(let j = arr.length-1 ; j>0 ; j--){
//         arr[j]=arr[j-1]
//     }
//     arr[0] = temp
    
// }
// console.log(arr);




//====================================================
//====================================================
// --------------- Reverse Array

// let arr = [10, 20, 30, 40, 50]

// let n = 12
// n = n%arr.length
// console.log(arr);
// console.log(reverse(arr,0,n-1));
// console.log(reverse(arr,n,arr.length-1));
// console.log(reverse(arr,0,arr.length-1));

// function reverse(arr,i,j){    
//     let temp = null
//     while(i<j){
//         temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         i++
//         j--
//     }
//     // console.log(arr);
//     return arr   
// }

//===================================================
//--------- check string pallindrom or not-----------
// let str = "naman"
// let n = str.length

// function pall(i){
//     if(i>n/2) return true
//     if(str[i]!==str[n-i-1]) return false
//     return pall(i+1)
// }

// console.log(pall(0))

//=============================================
// -------------- fibonacci series-------------

// let n = 5
// let i = 1
// let last =0
// let current = 1
// console.log(last);
// console.log(current);

// function fibo(i,n){
//     if(i>n-2)return
//     let sum = last + current
//     console.log(sum);
//     last = current
//     current = sum
//     fibo(i+1,n)
    
// }

// fibo(i,5)

//===================================================
//------------------ Reverse string -----------------
// let arr = "rajbilwe"
// //first way
// let revArr = ""
// for(let i = arr.length-1 ; i>=0 ; i--){
//     revArr += arr[i]
// }
// console.log(revArr);

// // second way
// let revStr = arr.split('').reverse().join('')
// console.log(revStr);


//===================================================
//------------Total Number of pair ------------------
// let arr =  [2,4,6,8,10]
// let tp = 0
// for(let i = 0 ; i<arr.length-1 ; i++){
//     for(let j = i + 1 ; j<arr.length ; j++){
//         console.log("("+arr[i]+","+arr[j]+")");
//         tp++
//     }
// }
// console.log("("+arr[arr.length-1]+")");
// console.log(tp);


// let arr = [2,4,6,8,10]

// for(let i = 0 ; i<arr.length ; i++){
//     let str = ""
//     console.log(arr[i]);
//     for(let j = i + 1 ; j<arr.length ; j++){
//         str += arr[j]+" "   
//     }
//     console.log(str);  
// }


//===================================================
//---count how many Zero and one in this array ------

// let arr = [0,0,0,1,1,0,1,1,0,0,1,0]

// let zeroCount = 0
// let oneCount = 0

// function count(arr,zeroCount,oneCount){
    

//     for(let i = 0 ; i<arr.length ; i++){
//         if(arr[i]===1){
//             oneCount++
//         }
//         if(arr[i]===0){
//             zeroCount++
//         }
//     }

//     return [zeroCount,oneCount]
// }

// let ans = count(arr,zeroCount,oneCount)

// console.log("in this array Zero "+ans[0]+" and one "+ans[1]);




//==================================================================
//==================================================================
// ----------------------- Pettern rectangle -----------------------
// let n = 5
// let str = ""
// for(let i = 1 ; i<=n ; i++){
//     for(let j = n-i; j>0 ; j--){
//         str +="  "
//     }
//     for(let k = 1 ; k <= i*2 ; k++){
//         if(k%2!==0){
//             str +="* "
//         }else{
//             str +="  "
//         }
//     }
//     console.log(str);
//     str = ""  
// }



//==========================================================
//---------------------Bubble short ------------------------


// let arr = [10,8,16,2,5,1]
// for(let i = 0 ; i<arr.length-1;i++){
//     for(let j = 0 ; j<arr.length-i-1 ; j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }   
// }
// console.log(arr);



//===========================================================
//------------------Extreme print in an array ---------------

// let arr = [10,20,30,40,50]
// let newArr =[]
// let indx = 0
// for(let i = 0 ; i<arr.length/2 ; i++){

//     if(arr[i]=== arr[arr.length-1-i]){
//         newArr[indx++] =  arr[i]

//     }else{
//     newArr[indx++] =  arr[i]
//     newArr[indx++] = arr[arr.length-1-i];
//     }
// }

// console.log(newArr);



//=============================================
//----------- print pair of two number---------

// let arr = [10,20,30]

// for(let i = 0 ; i <arr.length ; i++){
//     let str = ''
//     for(let j = 0 ; j<arr.length ;j++){
//         str +=arr[i]+","+arr[j]+" "
//     }
//     console.log(str);  
    
// }


//============================================
//------------Zero swipt to left -------------

// let arr = [0,1,0,1,0,0,1,1,0,1,1,0,0]

// let c0 = 0
// let c1 = 0

// for(let i = 0 ;i<arr.length ; i++){
//     if(arr[i]===0)c0++
//     if(arr[i]===1)c1++
// }
// let i = 0
// for(i ; i<c0 ;i++){
//     arr[i] = 0 
// }
// for(let k = i ; k<arr.length ;k++){
//     arr[k] = 1 
// }
// console.log(arr);




//=========================================================
// print sub array

// let arr = [2,4,6,8,10]

// for(let i = 0 ; i<arr.length ; i++){
//     for(let j = 1; j<arr.length ; j++){
//         let subarray = arr.slice(i,j+1)
//         console.log(subarray);
        
//     }
// }

//====================================================


// let myArray = [6,9,1,2,3,4,5,6,4,4,2,3,1,]
// //---Array to set with romoving duplicate vlaue
// let obj = new Set(myArray)
// obj.add(10)// Add a value
// obj.delete(2)// Remove 2 from obj
// console.log(obj.size); // size of obj
// console.log(obj.has(6));// true
// console.log(obj);

// //---set to Array
// console.log([...obj]);


//====================================================
// let arr = [5,8,1,2,5,6,7,8,6,6,34,34,4,4,5,34]

// first way
// for(let i = 0 ; i<arr.length ; i++){
//     let count = 1
//     for(let j = i ; j<arr.length ; j++){
//         if(arr[i]>=0 && arr[i]==arr[j+1] ){
//             arr[j+1] = -1
//             count++
//         }
//     }
//    if(arr[i]>=0){
//     console.log(arr[i],count)
//    }
// }


// Second way
// for(let i = 0 ; i<arr.length ; i++){
//     let count = 1
//     if(arr[i]!=-1){
//         for(let j = i+1 ; j<arr.length ; j++){
//             if(arr[i]==arr[j] ){
//                 arr[j] = -1
//                 count++
//             }
//         }
//         console.log(arr[i],count)
//     }
// }

//=====================================================
// count sum of sub array 
// let arr = [1,2,3,7,5,12]
// let sum = 12
// let count = 0

// for(let i = 0 ; i<arr.length ;i++){
//     let arrSum = 0
//     for(let j = i ; j<arr.length ; j++){
//         arrSum+=arr[j]
//         if(arrSum == sum){
//             count++
//         }
//         if(arrSum>sum){
//             break
//         }
//     }
// }
// console.log(count);


// let size = Number(prompt("enter size of array :"))
// let arr = new Array(size)
// for(let i = 0 ; i <size; i++){
//     arr[i] = Number(prompt("enter the element :"))
// }

// console.log(arr);


//======================================================
// ------------------sum of array -------------------
// let size = Number(prompt("enter size of array :"))
// let arr = new Array(size)
// for(let i = 0 ; i <size; i++){
//     arr[i] = Number(prompt("enter the element :"))
// }
// let sum = 0 
// for(let i = 0 ;i<arr.length;i++){
//     sum+=arr[i]
// }
// console.log(sum);



//=====================================================
// ----------- find max elem of the array ------------
// let arr = [34,56,9,36,98,12,33]
// let max = arr[0]

// for(let i = 0 ; i<arr.length ; i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log(max);

// let arr = [34,56,9,36,98,98,12,33,60]
// let max = Math.max(arr[0],arr[1])
// let secondMax = Math.min(arr[0],arr[1])

// for(let i = 2 ; i<arr.length ; i++){
//     if(arr[i]>max){
//         secondMax = max
//         max = arr[i]
//     }
//     else if(arr[i]>secondMax && arr[i]<max){
//         secondMax = arr[i]
//     }
// }
// console.log(secondMax);


//============================================
// let size = Number(prompt("enter size of array :"))
// let arr = new Array(size)
// for(let i = 0 ; i <size; i++){
//     arr[i] = Number(prompt("enter the element :"))
// }

// let NewArr = new Array(arr.length)
// let j = 0
// for(let i = NewArr.length-1 ; i>=0 ; i-- ){
//     NewArr[j] = arr[i]
//     j++
// }

// let j = 0
// let i = arr.length-1
// while(j<i){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     j++
//     i--
// }

// console.log(arr);


//========================================================

let arr = [1,2,3,4,5]
let temp = arr[0]
for(let i = 0 ; i<arr.length;i++){
    arr[i]=arr[i+1]
}
arr[arr.length-1] = temp
console.log(arr);
