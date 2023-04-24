// Takes an element and place is in its correct position (order)

<?php
// selection sort

$arr =  [10,9,8,7,6,5,4,3,2,1]; 
$n = count($arr);

for($i=0; $i<=$n-1; $i++){
    $j = $i;
  while($j > 0 && $arr[$j-1] > $arr[$j]){
      $temp = $arr[$j-1];
      $arr[$j-1] = $arr[$j];
      $arr[$j] = $temp;
      $j--;
  }
}

print_r($arr);

/*

BestCase = O(n)
WorstCase = O(n^2)

*/
?>

