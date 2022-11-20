/**
 * @param {number} num
 * @return {string}
 
 Runtime: 204 ms, faster than 70.82% of JavaScript online submissions for Integer to Roman.
Memory Usage: 47.1 MB, less than 72.90% of JavaScript online submissions for Integer to Roman.
 */
var intToRoman = function(num) {
     let notation = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"] 
     let value = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    
    let roman='';
    
    for (i=0; num > 0; i++){
        while(num >= value[i]){
            roman += notation[i];
            num -= value[i];
        }
    }
    return roman;
    
};


////////////////  



/**
Runtime: 128 ms, faster than 92.59% of JavaScript online submissions for Integer to Roman.

 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
     const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const M = ["", "M", "MM", "MMM"];
    
    const result = M[Math.floor(num / 1000)] + C[Math.floor((num % 1000) / 100)] + X[Math.floor((num % 100) / 10)] + I[Math.floor(num % 10)];
    return result;
};
