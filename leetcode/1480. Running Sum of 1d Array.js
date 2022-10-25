/*
 Your input
[1,2,3,4]
Output
[1,3,6,10]
Expected
[1,3,6,10]
*/

var runningSum = function(nums) {
    let sumArray = [];
   for(let i=0; i< nums.length; i++){
           if(i==0){
               sumArray[0] = nums[i];
           }else{
               sumArray.push(sumArray[i-1]+nums[i]);
           }
   }
   return sumArray
};
