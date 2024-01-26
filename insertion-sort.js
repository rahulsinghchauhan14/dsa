/*
Takes an element and place it in 
its correct order

Time Complexity = O(n^2) worst case
Optimize = O(n)
*/


function insertionSort(arr){
    let len = arr.length;

    for(let i = 0; i < len; i++){
        let j=i;
        while(j > 0 && arr[j-1] > arr[j]){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j--;
        }
    }
    return arr;
}

let ans = insertionSort([14,9,15,12,6,8,5]);

console.log(ans);