/**
 
 ****
 ****
 ****
 ****

 */

 function printPattern(no){
    if(no < 1) return;

    for(let i=0; i < no; i++){
        let row = '';
        for(let j=0; j < no; j++){
            row += '*';
        }
        console.log(row);
    }

 }

 console.log(printPattern(4));