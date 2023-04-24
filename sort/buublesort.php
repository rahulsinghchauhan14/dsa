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

?>
