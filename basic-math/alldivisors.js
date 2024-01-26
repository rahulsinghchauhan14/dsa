/*
print all the digits which divides the given no
*/

function alldivisors1(no){
    for(let i =1; i <= no; i++ ){
        if(no%i==0){
            console.log(i);
        }
    }
}

function alldivisors(no){
    let arr = [];
    for(let i =1; i <= Math.sqrt(no); i++ ){
        if(no%i==0){
            //console.log(i);
            arr.push(i);
            if((no/i) != i){
               // console.log(no/i);
               arr.push(no/i);
            }
        }
    }
    console.log(arr.sort((a,b) => {return a-b}));
}


let ans = alldivisors(36);