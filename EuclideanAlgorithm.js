/*
given two numbers
n1, n2
n1 > n2
gcd(n1,n2) = gcd(n1-n2,n2) and repeat until you get gcd value

ex: n1=20, n2=15
gcd(20-15,15) = (5,15)
gcd(15-5,5) = (10,5)
gcd(10-5,5) = (5,5)
gcd(5-5,5) = (0,5)
gcd(5)
*/


function EuclideanAlgorithm1(n1,n2){
    let max = Math.max(n1,n2);
    let min = Math.min(n1,n2);
    if(min !=0){
        //EuclideanAlgorithm((max-min),min);
        EuclideanAlgorithm((max%min),min);
    }
    else{
        console.log(max);
    }
}

function EuclideanAlgorithm(a,b){

    while(a > 0 && b > 0){
        if(a>b){
            a = a%b;
        }else{
            b = b%a;
        }
    }
    if(a==0){
        console.log(b);
    }else{
        console.log(a);
    }

}




EuclideanAlgorithm(52,10);