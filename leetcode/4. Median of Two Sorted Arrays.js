4. Median of Two Sorted Arrays

If array is sorted than use binary search (ffor get the solution in log)

two case
- even 
- odd

l1 < r2
l2 < r1


arr1[1,5,8,10,18,20]
arr2[1,2,3,6,7]

sudo code:
lo=0; hi=n1

while(lo<=hi)
{
    cut1 = lo+hi/2;
    cut2 = (n1+n2/2) - cut1;

    l1 = cut1 ==  ? int_min : arr1[cut1 - 1];
    l2 = cut2 ==  ? int_min : arr2[cut2 - 1];

    r1 = cut1 ==  ? int_max : arr1[cut1];
    r2 = cut2 ==  ? int_max : arr2[cut2];

    if(l1 > r2){
        hi = cut1-1;
    }else if(l2 > r1){
        lo = cut1+1;
    }else{
        return (n1+n2) % 2 == 0 ? (max(l1,l2) + min(r1,r2))/2 : min(r1,r2);
    }
}
