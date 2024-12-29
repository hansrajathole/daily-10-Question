
const prompt = require("prompt-sync")({sigint:true});
//=============================================================
//------------------- print reverse the string ----------------

// let str = "Hansraj"
// let str2 = ""
// for(let i = str.length ; i>=0 ; i-- ){
//      str2 += str.charAt(i);   
// }
// console.log(str2);

//=============================================================
//------------- check given string pallindrom or not ----------

// let str = "madam"
// let str2 = ""
// for(let i = str.length ; i>=0 ; i-- ){
//      str2 += str.charAt(i);   
// }

// if(str===str2)console.log("Pallindrom string");
// else console.log("not Pallindrom");


//second way
// let i =  0
// let j = str.length-1
// let isPall = true
// while(i<j){
//     if(str.charAt(i)!==str.charAt(j)){
//         isPall = false
//         break
//     }
//     i++
//     j--
// }
// if(isPall)console.log("Pallindrom string");
// else console.log("not pallindrom string");


//third  way
// for(let i = 0 ; i<str.length ; i++){
//     if(str.charAt(i)!==str.charAt(str.length-i-1)){
//         isPall = false

//     }
// }
// if(isPall)console.log("Pallindrom string");
// else console.log("not pallindrom string");


//=========================================================
// count voweels and consonant
// let str = "Hello world 1234 "
// let countVowels = 0
// let countConsonant = 0
// let countSpace = 0
// let countNumber = 0
// for(let i = 0 ; i<str.length ; i++){
//   let char = str.charAt(i)
//   if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")countVowels++
//   else if(char===" ")countSpace++
//   else if(char.charCodeAt(i)>=48 && 58 <= char.charCodeAt(i))countNumber++
//   else countConsonant++
// }

// console.log(`vowels count ${countVowels}, and space count ${countSpace}, and consonant count ${countConsonant} and count Number ${countNumber}`);



//============================================================


let s = Number(prompt("enter any number"))
console.log(s);
