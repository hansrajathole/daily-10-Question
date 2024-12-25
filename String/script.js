//===================================================
// print all charactor in next line
// let s = "hansraj"

//first way
// for(let i = 0 ; i<s.length ; i++){
//     console.log(s.charAt(i));
// }

// second way
// for(let i = 0 ; i<s.length ; i++){
//     console.log(s[i]);
// }

//==========================================
// reverse string 
// let str = "hello"
// let str2 = ''
// for(let i = str.length-1 ; i>=0 ;i--){
//     str2 += str.charAt(i)
// }
// console.log(str2);


//==========================================
// check the string pallindrom or not 

let str = "mom"
let str2 = ''

//first way
// for(let i = str.length-1 ; i>=0 ;i--){
//     str2 += str.charAt(i)
// }

// if(str === str2)console.log("pallindrom string");
// else console.log("not pallindrom string");


// second way 
let i = 0 
let j = str.length-1
let ispall = true
while(i<j){
    if(str.charAt(i)!==str.charAt(j)){
        ispall = false
        break
    }   
    i++
    j--    
}

if(ispall)console.log("pallindrom");
else console.log("not pallindrome");

