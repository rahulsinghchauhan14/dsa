function digitExtration(digit){
    let count=0;
    let rev = '';
    while(digit > 0){
        let lastDigit = digit%10;
        rev += lastDigit;
        digit = parseInt(digit/10);
        count++;
    }
    console.log(parseInt(rev));
}

let ans = digitExtration(1980);