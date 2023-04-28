/*

Merge Sort Algo
TimeComplexity O(N log base 2 N)
SpaceComplexity 
- Divide & Merge
- Recursion

Algo 
MergeShort ( arr, low, high ) 
call recursively for
MergeShort (arr, low, mid) - left array
MergeShort (arr, mid+1, high) - right array
Merge(arr,low, mid, high) - merge both the array

*/

<?php

$array = [1, 3, 2, 5, 4, 65, 34, 23, 13];

function merge(&$arr, $low, $mid, $high) {
    // [low...mid]
    // [mid+1..high]
    $left = $low;
    $right = $mid + 1;
    $temp = array();

    while ($left <= $mid && $right <= $high) {
        if ($arr[$left] <= $arr[$right]) {
            array_push($temp, $arr[$left]);
            $left++;
        } else {
            array_push($temp, $arr[$right]);
            $right++;
        }
    }

    while ($left <= $mid) {
        array_push($temp, $arr[$left]);
        $left++;
    }

    while ($right <= $high) {
        array_push($temp, $arr[$right]);
        $right++;
    }

    for ($i = $low; $i <= $high; $i++) {
        $arr[$i] = $temp[$i - $low];
    }
}

function mS(&$arr, $low, $high) {
    if ($low == $high) {
        return;
    }
    $mid = floor(($low + $high) / 2);
    mS($arr, $low, $mid);
    mS($arr, $mid + 1, $high);
    merge($arr, $low, $mid, $high);
}

function MergeShort($array, $n) {
    mS($array, 0, $n - 1);
    return $array;
}

$result = MergeShort($array, count($array));
print_r($result);

