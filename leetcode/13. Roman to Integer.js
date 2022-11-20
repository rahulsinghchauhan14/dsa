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
