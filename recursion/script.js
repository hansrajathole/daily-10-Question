const prompt = require("prompt-sync")({sigint: true});
// let n = Number(prompt("Enter a number: "));

//================================================================
// ======================== print hello world ====================

// let printHello = (n)=>{
//     if(n<=0){
//         return;
//     }
//     console.log("hello world");
//     printHello(n-1);
    
// }
// printHello(n)



//================================================================
// ======================== print 1 to n =========================

// let print1ToN = (i,n)=>{
//     if(i>n){
//         return;
//     }
//     console.log(i);    
//     print1ToN(i+1,n);
// }
// print1ToN(1,n)


//================================================================
//========================= print n to 1 =========================

// let printNTo1 = (n)=>{
//     if(n<=0){
//         return;
//     }
//     console.log(n);    
//     printNTo1(n-1);
// }
// printNTo1(n)


//==============================================================
//========================= sumNterm  ==========================

// let sumNterm = (n)=>{
//     if(n==1){
//         return n;
//     }
//     return n + sumNterm(n-1);
// }
// console.log(sumNterm(n));


//==============================================================
//========================= factorial ==========================
// let factorial = (n)=>{
//     if(n==1){
//         return n;
//     }
//     return n * factorial(n-1);
// }
// console.log(factorial(n));

//==============================================================
//========================= sumOfDigit =========================
// let sumOfDigit = (n)=>{ 
//     if(n==0){
//         return 0;
//     }
//     return n%10 + sumOfDigit(Math.floor(n/10));
// }
// console.log(sumOfDigit(n));


//==============================================================    
//====================== reserseDigit ==========================
// let rev = 0;
// let reverseDigit = (n)=>{    
//     if(n==0) return 0;
//     rev = rev*10 + n%10;
//     reverseDigit(Math.floor(n/10)); 
//     return rev;
    
   
// }
// console.log(reverseDigit(n,rev));

//==============================================================
//========================= fibonacii ==========================
// let fibo = (n)=>{
//     if(n==0 || n==1) return n;
//     return fibo(n-1) + fibo(n-2);
// }
// console.log(fibo(n));


//==============================================================
//========================= fibo series ========================
// let fiboSeries = (i,j,n)=>{  
//     console.log(j);
//     if(n==1) return;
//     fiboSeries(j,i+j,n-1);
// }
// fiboSeries(0,1,n);


//==============================================================
//========================== GCD  ==============================
// let a = Number(prompt("Enter a number: "));
// let b = Number(prompt("Enter b number: "));
// let i = Math.min(a,b);

// let gcd = (a,b,i)=>{
//     if(i==1){
//         return 1;
//     }
//     if(a%i==0 && b%i==0){
//         return i;
//     }
//     return gcd(a,b,i-1);
// }
// console.log(gcd(a,b,i));


// second method
// let gcd = (a,b)=>{
//     if(a===b)return a;
//     if(a>b)return gcd(a-b,b);
//        return gcd(a,b-a);
   
// }
// console.log(gcd(a,b));

//==============================================================
//========================== factor ============================
let n = Number(prompt("Enter a number: "));
// let factor = (n,i)=>{
//     if(i>n/2){
//         console.log(n);
//         return;
//     }
//     if(n%i==0){
//         console.log(i);
//     }
//     factor(n,i+1);
// }   
// factor(n,1);


// let factor = (n,i)=>{
//         if(i>n/2){
//             console.log(n);
//             return;
//         }
//         if(n%i==0){
//             console.log(i);
//         }
//         factor(n,i+1);
//     }   
//     factor(n,1);

// }   

// factor in loop 
// for(let i = 1 ; i<=Math.floor(Math.sqrt(n));i++){
//     if(n%i===0){
//         if(n/i==i){
//             console.log(i);
//         }else{
//             console.log(i);
//             console.log(n/i);
//         }
//     }
// }

// factor in loop with sorted
let i = 0
for(i = 1; i*i < n ; i++){
    if(n%i===0){
        console.log(i);
    }
}
if((i-n/i)==1)i--
for(;i>=1 ; i--){
    if(n%i == 0){
        console.log(n/i);
    }
}


//==============================================================
