//===========================================
// -------print name n times using recursion 


// function printName(i,n){
//     if(i>n){
//         return
//     }
//     console.log("raj");
//     printName(i+1,n);

// }

// console.log(printName(1,4));


//===========================================
// -------print 1 to n number using recursion 

// function printNum(i,n){
//     if(i>n)return
//     console.log(i);
//     printNum(i+1,n)
// }
// printNum(1,5)


//===========================================
// -------print n to 1 number using recursion

// first way
// function printN(n){
//     if(n<1)return
//     console.log(n);
//     printN(n-1)
// }
// printN(5)

//second way
// function printN(i,n){
//     if(i<1)return
//     console.log(i);
//     printN(i-1,n)
// }
// printN(10,10)


//===========================================
// -------print 1 to n number using backtracking 

// function printNum(i,n){
//     if(i<1)return
//     printNum(i-1,n)
//     console.log(i);
// }
// printNum(5,5)



//===========================================
// -------print n to 1 number using backtracking 

// function printNum(i,n){
//     if(i>n)return
//     printNum(i+1,n)
//     console.log(i);
// }
// printNum(1,10)



//=============================================
// -------print sum of n number using recursion

// function printSum(i,sum){
//     if(i<1){
        // console.log(sum);
//         return
//     }
//     printSum(i-1,sum+i)
// }
// printSum(5,0)

//=============================================
// -------print sum of n number using recursion
// ---------but Functionally------------------
// function printSum(i){
//     if(i===0){
//         return 0
//     }else{
//        return i + printSum(i-1)
//     }
    
// }
// console.log(printSum(5))



//=============================================
// -------print fact of n number using recursion

// function fact(n){
//     if(n===0){
//         return 1
//     }else{
//         return n* fact(n-1)
//     }
// }

// console.log(fact(5));





//=============================================
// -------print reverse array using recursionn

// let arr = [1,2,3,4,5]
// let temp = 0
// function revArr(i,n){
//     if(i>n/2){
//         console.log(arr);
//         return
//     }else{
       
//         temp = arr[i]
//         arr[i] = arr[n-1-i]
//         arr[n-1-i] = temp
//         revArr(i+1,n) 
//     }
// }
// let n = arr.length
// revArr(0,n)



//=============================================
//--------------------GCD ---------------------

// function gcd(a,b){
//         if(b===0)return a
//         return gcd(b,a%b)
// }

// console.log(gcd(234,45));


