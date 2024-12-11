

let arr =[-5,-4,-3,-2,0,2,4,6,8]

function getsum(arr){


    for(let i = 0 ; i <arr.length ; i++){
        
        for(let j =0 ; j<arr.length ; j++){
            
            if(arr[i]+arr[j]==0){
                return [arr[i],arr[j]]
            }
        }
    }

}
console.log(getsum(arr));
