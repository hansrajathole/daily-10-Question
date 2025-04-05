// let obj ={
//     name : "sahil",
//     age : 22,

// }
// function getsum(){

//    let a = 10
//    let b = 20
//    let count = 1

//     return function sum(a,b){
//         return count++
//    }

// }
// let ans = getsum()
// console.log(ans());
// console.log(ans());
// console.log(ans());
// let ans1 = getsum()
// console.log(ans1());

// function getSum(a){

//     return function(b){
//          console.log(a+b);

//     }
// }

// getSum(10)(20)

// function greeter(greet){

//     return function(name){
//         console.log(greet + " " + name);

//     }
// }

// greeter("hello")("sahil")
// greeter("ram ram")("vikram")

// function callAPI(){
//     let count = 1
//     return function(){
//         if(count <=3){
//             return count++
//         }else{
//             return "API limit exceeded"
//         }
//     }
// }

// let ans = callAPI()
// console.log(ans());
// console.log(ans());
// console.log(ans());
// console.log(ans());

// function toggle(){
//     let isOn = false
//     return function(){
//         isOn = !isOn
//         return isOn ? "ON" : "OFF"
//     }
// }

// let ans = toggle()
// console.log(ans());
// console.log(ans());
// console.log(ans());
// console.log(ans());

// function password(){
//     let password = 12345678
//     return function(pass){
//         if(pass === password){
//             return "login successfully"
//         }else{
//             return "Invalid password"
//         }
//     }
// }

// let ans = password()
// console.log(ans(12345678));
// console.log(ans(1234568));

// function time() {
//     let allow = true;
//     return function () {
//       if (!allow) {
//         return;
//       } else {
//         console.log("hello");
//         allow = !allow;
//         setTimeout(() => {
//           allow = !allow;
//         }, 3000);
//       }
//     };
// }

// let ans = time();
