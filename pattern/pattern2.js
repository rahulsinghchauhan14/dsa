/*

*
**
***
****
*****

*/

function printPattern(no){
    if(no < 1) return;

    for(let i=0; i < no; i++){
        let row = '';
        for(let j=0; j < i+1; j++){
            row += '*';
        }

        console.log(row);
    }
}

/*
1
12
123
1234
12345
*/

function printPattern1(no){
    if(no < 1) return;

    for(let i=0; i < no; i++){
        let row = '';
        for(let j=1; j <= i+1; j++){
            row += j;
        }

        console.log(row);
    }
}

/**

    1
    22
    333
    4444
    55555

 */

function printPattern2(no){
    if(no < 1) return;

    for(let i=1; i <= no; i++){
        let row = '';
        for(let j=0; j < i; j++){
            row += i;
        }

        console.log(row);
    }
}

printPattern2(5)