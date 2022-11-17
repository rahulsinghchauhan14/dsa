function maxMeetings(s, f, n)
{
    var aCollectiveArray = [];
    for(var i=0; i<n; i++){
        var aNew = [];
        aNew.push(i + 1);
        aNew.push(s[i]);
        aNew.push(f[i]);
        aCollectiveArray.push(aNew);
    }
    
    //array sorted based on end Time
    aCollectiveArray.sort((a,b) => a[2] - b[2]);
    console.log(aCollectiveArray);
    //endTime is at 2nd index of subarray inside aCollectiveArray
    var endTime = aCollectiveArray[0][2];

    //result will contain the indices of meetings
    var result = [];

    //first meeting will be bydefault push as array is already sorted
    result.push(aCollectiveArray[0][0]);
    
    //will compare if next startTime > prev endTime
    for(var k=1; k<aCollectiveArray.length; k++){
        var startTime = aCollectiveArray[k][1];
        if(startTime > endTime){
            result.push(aCollectiveArray[k][0]);
            endTime = aCollectiveArray[k][2]
        }
    }
    
   // console.log(result);
}


// Starting time
let s = [ 1, 3, 0, 5, 8, 5 ];
 
// Finish time
let f = [ 2, 4, 6, 7, 9, 9 ];
 
// Number of meetings.
let n = s.length;
 
// Function call
maxMeetings(s, f, n);
