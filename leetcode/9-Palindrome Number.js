/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     /* let i =0;
    let n = x.toString().length -1;
    let string = x.toString();
    let revstr ='';
    while(i <= n){
       revstr += string[n];
        n--;
    }
    
    if(revstr == x){
        return true;
    }
    
    return false; */ // runtime 310ms
    
    const str = x.toString();
    let pal = "";
    for(let i = str.length - 1; i >= 0; i--) {
        pal = pal + str[i];
    }
    if(str === pal) return true
    else return false
 // runtime 153 ms
     
    
};



    // sample 129 ms submission
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const num = x.toString().split("");
    let reversedNums = [];
    let isPalindrome = true; 
    
    for (let i = num.length - 1; i >= 0; i--) reversedNums.push(num[i]);
    for(let i = 0; num.length > i; i++) {
        if(num[i] !== reversedNums[i]) {
             isPalindrome = false;
             break;
        }
    }
    return isPalindrome;
};
isPalindrome(5)
