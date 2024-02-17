/**
 * @param {number} number
 * @return {boolean}
 */
function isPalindrome(number) {
  // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
  number = number.toString();
  let len = number.length;
    let revstring = '';
    
    for(let i = len-1; i >= 0; i--){
        revstring += number[i]; 
    }
    if(number != revstring){
      return 'Not';
    }else{
      return 'Yes';
    }
}
