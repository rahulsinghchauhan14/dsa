function twosum(){
    const nums = [2, 7, 11, 15];
const target = 9
let numMap = new Map();

for(let i = 0; i < nums.length; i++){
    let complement = target - nums[i];
    if(numMap.has(complement)){
        return [numMap.get(complement), i]
    }
    numMap.set(nums[i],i)
}

return [];
}

console.log(twosum());
