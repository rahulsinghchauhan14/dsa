<?php
// selection sort

/*
select the minimum and swap the value
*/

$arr = [10,9,8,7,6,5,4,3,2,1]; 
$n = count($arr);

for($i=0; $i < $n-2; $i++){
    $mini = $i;
    for($j=$i; $j < $n; $j++){
        if($arr[$i] > $arr[$j]){
            $mini = $j;
        }
    }
    $temp = $arr[$mini];
    $arr[$mini] = $arr[$i];
    $arr[$i] = $temp;
}

print_r($arr);


/*
BestCase  - O(n^2)
WorstCase - O(n^2)
AvgCase   - O(n^2)
*/
