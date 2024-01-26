/*
select minimums and swap

[13,46,24,52,20,9] 
-> select minimum which is 9
[9,46,24,52,20,13]
-> 13 is min
[9,13,24,52,20,46]
-> 20 is min
[9,13,20,52,24,46]
-> 24 is min
[9,13,20,24,52,46]
-> 46 is min
[9,13,20,24,46,52]

Time Complexity = n*n+1/2 = n^2/2 + n/2 = O(n^2)
*/

function selectionsort(arr){
    let len = arr.length;

    for(let i=0; i < len-1; i++){
        let min = i;
        for(let j=i; j < len; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

let ans = selectionsort([13,46,24,52,20,9]);

console.log(ans);