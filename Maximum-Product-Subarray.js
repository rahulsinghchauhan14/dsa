// Maximum Product Subarray

// Brute force approach
let arr = [4,3,4,4];
let n = 4;
let max = 0;
for(let i = 0; i < n; i++){
    let prod = arr[i] * arr[i+1];
    if(prod > max){
        max = prod;
    }
}
console.log(max);

// 
