/*
prime no, is no which is divisible by 1 or itself
*/

function isprime(no){
    let count = 0;
    for(let i =1; i*i <= no; i++ ){
        if(no % i == 0){
            count++;
            if((no/i) != i){
                count++;
            }
        }
    }

    if(count == 2) {
        console.log('prime');
    }else{
        console.log('not');
    }
}

let ans = isprime(11);