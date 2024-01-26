/*
Tree -> non linear data structure
one node connected to the multiple nodes

-> node [first node]
-> root [top node]
-> children 
-> parent
-> siblings [parents are same]
-> ancestor [parents]
-> descendent [child]
-> leaf [did not have child]

Binary Tree => the tree which have less than 2 child

node
{
    int data;
    node *left
    node *right
}

queue;
*/

function isPalindrome(number) {
    // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
    if(number%4==0){
        return "Yes";
    }else{
        return "Not";
    }
  }
  let ans = isPalindrome(2021);

  console.log(ans);