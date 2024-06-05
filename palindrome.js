/**
 * 121 | 121 -> true
 *  -121 | 121- -> false
 * 01 | 10 -> false
 */

let x = 0;
 

let newArr = String(x).split('');
let length = newArr.length-1;
let rev = '';

while(length >= 0)
{
    rev += newArr[length];
    length--;
}

if(x == rev){
    console.log(true);
}else{
    console.log(false);
}


// more optimized solution
var isPalindrome = function(x) {
    // Early return for negative numbers or multiples of 10 that are not zero
    if (x < 0 || (x % 10 == 0 && x !== 0)) {
        return false;
    }

    let reversed = 0;
    let original = x;
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return original === reversed;
};