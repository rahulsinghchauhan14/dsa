/*
if N=371 and when we add cube of every digit of number
and sum is equal to number then we called number is 
armstrong
*/

function armstrong(no){
    let ono = no;
    let sum = 0;
    while(no > 0){
        let lastDigit = no%10; 
        sum += parseInt(lastDigit * lastDigit * lastDigit);
        no = parseInt(no/10);
    }

    if(sum == ono){
        console.log(sum);
    }
}


let ans = armstrong(37);