/*
Quick Sort
ASC order
after tweaks DESC order
Better than MergeSort
TimeComplexity - O(N log N)
SpaceComplexity - O(1) // no temp array is used

[
a. 1st element in the array
b. last element in the array
c. median of the array
d. random element of the array
]

Step 1. Pick a pivot & place it in its correct place in the sorted array
 
Step 2. Smaller on the left and larger on the right

*/

/*
# Pseudo code
index [0, 1, 2, 3, 4, 5, 6, 7]
array [4, 6, 2, 5, 7, 9, 1, 3]
low = 0 [i], high = 7 [j]
pivot = array[low]

if(pivot > array[i]) stop 1
then check 
if(pivot > array[j]) stop j
and swap j with i
repeat until i and j are not crossed
when pivot is placed in the correct order let pivot as a partition index



*/
