/*
GCD = greatest common divisor
HCF = higer common fector

GCD = (20,40) find all the divisible for both 20 and 40 
and return common greater value
*/

function gcdhcf(n1,n2){
    let min = Math.min(n1,n2);
    let gcd = 1;
    for(let i=1; i<=min; i++){
        if(n1%i==0 && n2%i==0){
            if(gcd < i){
                gcd = i;
            }
        }
    }
    console.log(gcd);
}

gcdhcf(20,15);


/*
Euclidean Algorithm
*/

