/*
pushes the max to the last
by adjacent swaping


arr = [13,46,24,52,20,9]
-> 13 (13 > 46) no
-> 46 (46 > 24) yes then swap
[13,24,46,52,20,9]
-> 46 (46 > 52) no
-> 52 (52 > 20) yes, then swap
[13,24,46,20,52,9]
-> 52 (52 > 9) yes, then swap
[13,24,46,20,9,52]
- perform the same again until array is not short

Time Complexity - O(N^2) worst complexity

Time Complexity after this swap check is O(N)
{
    if(swap == 0){
            break;
        }
}
*/

function bubbleSort(arr){
    let len = arr.length;
    let isSwap = 0;
    for(let i = 0; i < len; i++){
        for(let j=0; j < len; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swap=1;
            }
        }
        if(swap == 0){
            break;
        }
    }
    return arr;

}

let ans = bubbleSort([13,46,24,52,20,9]);

console.log(ans);