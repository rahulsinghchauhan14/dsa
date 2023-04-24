<?php
// Bubble sort

/*
push the max value to the left by adjacent swap
*/

$arr = [10,9,8,7,6,5,4,3,2,1]; 
$n = count($arr);

for($i=$n-1; $i >= 1; $i--){
    for($j=0; $j <= $i-1; $j++){
        if($arr[$j] > $arr[$j+1]){
            $temp = $arr[$j];
            $arr[$j] = $arr[$j+1];
            $arr[$j+1] = $temp;
        }
    } 
}

print_r($arr);

/**************** Optimized *****************/
$arr =  [1,2,3,4,5,6,7,8]; //[10,9,8,7,6,5,4,3,2,1]; 
$n = count($arr);

for($i=$n-1; $i >= 1; $i--){
    $didSwap = 0;
    for($j=0; $j <= $i-1; $j++){
        if($arr[$j] > $arr[$j+1]){
            $temp = $arr[$j];
            $arr[$j] = $arr[$j+1];
            $arr[$j+1] = $temp;
            $didSwap = 1;
        }
    } 
    if($didSwap == 0){
        break;
    }
    echo "run \n";
}

print_r($arr);

/*
BestCase  - O(n)
WorstCase - O(n^2) 
*/
