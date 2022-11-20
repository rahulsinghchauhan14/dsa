/**
Runtime: 131 ms, faster than 92.33% of JavaScript online submissions for Roman to Integer.
Memory Usage: 47 MB, less than 67.97% of JavaScript online submissions for Roman to Integer.
**/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = new Map();
    roman.set('I' , 1);
    roman.set('V' , 5);
    roman.set('X' , 10);
    roman.set('L' , 50);
    roman.set('C' , 100);
    roman.set('D' , 500);
    roman.set('M' , 1000);
    
    const n = s.length;
    let ans = 0;
    let i = 0;
    while(i < n)
    {
        let first = roman.get(s[i]);
        let second;
        
        if(i+1 < n){
            second = roman.get(s[i+1]);
            
            if(first < second){
                ans += (second - first);
                i++;
            }else{
                ans += first;
            }
            
        }else{
            ans += first;
        }
        i++
    }

    return ans;
    
};





////////// 83 ms
var romanToInt = function(s) {
    let characterMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    let group = 0;
    let result = 0;
    
    for(let n=0; n<s.length; n++){
        const character = s[n];
        const prevNum = characterMap[s[n-1]];
        const currentNum = characterMap[character];
            
        if(prevNum < currentNum) {
            group = currentNum - group;
            continue;
        }
        if(prevNum > currentNum){
            result += group
            group = 0;
        }
        group += currentNum;
    }
    
    result += group;
    return result
};
