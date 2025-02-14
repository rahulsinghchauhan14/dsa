// Longest Substring Without Repeating Characters
const s = "abcabcbb";
let charSet = new Set();
let left = 0;
let maxLength = 0;

for(let right=0; right < s.length; right++){
    while(charSet.has(s[right])){
        charSet.delete(s[left]);
        left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left+ 1);
}

console.log(maxLength)

// Longest Substring Without Repeating Characters
const s = "abcabcbb";
let charSet = new Set();
let left = 0;
let maxLength = 0;
let start=0; let end = 0;

for(let right=0; right < s.length; right++){
    while(charSet.has(s[right])){
        charSet.delete(s[left]);
        left++;
    }
    charSet.add(s[right]);
     if(right - left + 1 > maxLength){
        maxLength = right - left + 1;
        start = left
        end = right
    }
   
}
 console.log(s.substring(start, end+1))
console.log(maxLength)
