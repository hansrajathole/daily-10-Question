const prompt = require("prompt-sync")({sigint:true});

//====================================================
//----------------- Hard Coded -----------------------

let arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

for(let i =0  ;i<arr.length ; i++){
    console.log("array of ",i);
    for(let j = 0 ; j<arr[i].length ; j++){
        process.stdout.write((arr[i][j])+" ");
    }
    console.log();
}

//=====================================================
//------------------ 2D Array dynamic -----------------

