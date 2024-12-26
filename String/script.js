//===================================================
// ---------print all charactor in next line --------
// let s = "hansraj"

//first way
// for(let i = 0 ; i<s.length ; i++){
//     console.log(s.charAt(i));
// }

// second way
// for(let i = 0 ; i<s.length ; i++){
//     console.log(s[i]);
// }





//====================================================
// --------------reverse string ----------------------
// let str = "hello"
// let str2 = ''
// for(let i = str.length-1 ; i>=0 ;i--){
//     str2 += str.charAt(i)
// }
// console.log(str2);





//====================================================
//---------check the string pallindrom or not -------- 

// let str = "mom"
// let str2 = ''
//first way
// for(let i = str.length-1 ; i>=0 ;i--){
//     str2 += str.charAt(i)
// }
// if(str === str2)console.log("pallindrom string");
// else console.log("not pallindrom string");


// second way 
// let i = 0 
// let j = str.length-1
// let ispall = true
// while(i<j){
//     if(str.charAt(i)!==str.charAt(j)){
//         ispall = false
//         break
//     }   
//     i++
//     j--    
// }
// if(ispall)console.log("pallindrom");
// else console.log("not pallindrome");




//====================================================
//-------------count vowels and consonant-------------

// let str = "hello world 12334"
// let countVowels = 0
// let countConsonant = 0
// let countSpace = 0
// let countNumber = 0
// for(let i = 0 ; i<str.length ; i++){
//    let char = str.charAt(i)
//    if(char === "a"|| char === "e" || char ==="i" || char==="o" || char==="u")countVowels++
//    else if(char===" ")countSpace++
//    else if(str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57)countNumber++
//    else countConsonant++

// }

// console.log(`vowels count ${countVowels}, and space count ${countSpace}, and consonant count ${countConsonant} and count Number ${countNumber}`);



//=====================================================
//-------------- togle the charactor ------------------ 
// 
// let str =  "hanSrAj"
// let result =  ''
// //first way
// for(let i = 0 ; i<str.length ; i++){
//    if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
//       result += str.charAt(i).toLowerCase()
      
//    }
//    if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
//       result += str.charAt(i).toUpperCase()
//    }
// }
// console.log(result);



// let str = "AbCd";
// let result = ""
// for(let i =0 ; i<str.length ; i++){
//    if(str.charAt(i) === str.charAt(i).toUpperCase()){
//          result += str.charAt(i).toLowerCase() 
//    }
//    else{
//       result += str.charAt(i).toUpperCase()
//    }
// }
// console.log(result)



//========================================================
//------count the valid words ------------------

// let words = ["pay" , "attre","practice", "attend"]
// let pref = "at"
// let count = 0
// for(let i = 0 ; i<words.length ; i++){
//    if(words[i].startsWith(pref))count++
// }
// console.log(count);





//=====================================================
//
// let sentence = "hello bhai kaise ho"
// let arr = sentence.split(" ")
// for(let i = 0 ; sentence.length ; i++){
//    console.log(arr[i].charAt(0).toUpperCase()+arr[i].substring(1));
// }