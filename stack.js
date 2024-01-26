/*
 Stack : LIFO

- Operations: Push, Pop, Peek/Top, isEmpty

- implement stack using Array and Linked List

*/


/* 
 implement stack using array 
 

*/
class StackUsingArray{
    
    constructor(){
        this.top = -1;
        this.size = 0;
        this.stack = [];
    }

    push(element) {
        this.top++;
        this.size++;
        this.stack[this.top] = element;
        //console.log("updated stack: ", this.stack);
        return this.stack;
    }

    pop() {
        if(this.top >= 0){
            const poppedElement = this.stack[this.top];
            this.top--; 
           //console.log("popped value: ", poppedElement); 
            return poppedElement;
        }else{ 
            //console.log("stack is empty");
            return -1;
        }
    }

    isEmpty(){
        if(this.top == -1){
            //console.log("stack is empty");
            return true;
        }
    }

    peek(){
        if(this.top >= 0){
            //console.log("top: ", this.stack[this.top]);
            return this.stack[this.top];
        }else{
            return -1;
            //console.log("Stack overflow");
        } 
    }

    stacksize(){ 
        //console.log(this.size);
        return this.size;
    }

    inputStack(){
        return this;
    }

}


/**
    two stack in an array
    Design a data structure, which represents two stacks using only 
    one array common for both stacks. The data structure should support
    the following operations:
    push1(NUM) - push 'Num' into stack1.
    push2(NUM) - push 'Num' into stack2.
    pop1() - pop out a top element from stack1 and return popped element,
    in case of underflow return -1.
    pop2() - pop out a top element from stack2 and return popped element,
    in case of underflow return -1.

    logic:
    insert in stack1 from left to right - top1
    insert in stack2 from right to left - top2
 */

    class TwoStackInArray{

        constructor(size){
            this.top1 = -1;
            this.top2 = size;
            this.size = size;
            this.array = new Array(size);
        }

        push1(num){
            if((this.top2 - this.top1) > 1){
                this.top1++;
                this.array[this.top1] = num;
            }else{
                console.log("stack is overflow");
            }
            console.log(this.array);
        }

        push2(num){ 
            if((this.top2-this.top1) > 1){
                this.top2--;
                this.array[this.top2] = num;               
            }else{
                console.log("stack is overflow push2");
            }
            console.log(this.array);
        }

        pop1(){
            if(this.top1 >= 0){
                const poppedElement = this.array[this.top1];
                this.top1--;
                console.log('from pop1: ',poppedElement);
            }else{
                console.log("stack is empty");
            }
        }

        pop2(){
            if(this.top2 < this.size){
                const poppedElement = this.array[this.top2];
                this.top2++;
                console.log('from pop2: ', poppedElement);
            }else{
                console.log("stack is empty");
            }
        }


    }

/*
reverse string using stack
*/

//let stack = new StackUsingArray();
class ReverseString extends StackUsingArray{

    reverseString(string){ 
        let reversedString = '';
        // push value inside the stack
        for(let i=0; i < string.length; i++){
            this.push(string[i]);
        }

        // pop value from the stack
        while(!this.isEmpty()){
            reversedString += this.pop();
        }
        return reversedString;
    }
}

// let rs = new ReverseString();
// let reversedString = rs.reverseString("rahulsingh");
// console.log(reversedString);


/*
delete middle element from stack
*/

class DeleteMiddle{

    constructor (){
        this.input = new StackUsingArray();
    }
    
    deleteMiddle(arr){
        let count = 0; 

        for(let i =0; i < arr.length; i++ ){
            this.input.push(arr[i]);
        }

        this.solve(this.input.stack,count, this.input.stacksize());
    }

    solve(inputs, count, size){
        // base case  
        if(count == Math.floor(size/2)){
            this.input.pop();
            return;
        }
 
        let num = this.input.peek();
        this.input.pop();
console.log(inputs);
        // recursive call
        this.solve(inputs,count+1, size);

        this.input.push(num);
    }

}

 

/*
Valid parenthesis
*/ 

class ValidParenthesis{
    constructor(){}

    check(str){
        let s = new StackUsingArray();

        for(let i =0; i<str.length; i++){
            let ch = str[i];

            // if opening bracket, stack push
            // if closed bracket, stacktop check and pop

            if(ch=='(' || ch=='{' || ch=='['){
                s.push(ch);
            }else{
                // for closing bracket
               
                if(!s.isEmpty()){
                    let stacktop = s.peek();
                    if((ch==')' && stacktop=='(') ||
                       (ch=='}' && stacktop=='{') ||
                       (ch==']' && stacktop=='[') 
                    )
                    //if(matches(stacktop, ch))
                    {
                        s.pop();
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
                
            }
        }

        if(s.isEmpty()){
            return true;
        }else{
            return false;
        }
    }
}

//const vp = new ValidParenthesis();
//console.log(vp.check('([{([{[{}]}])}])'));


class PushElementInBottom{
    
    constructor(){ 
    }

    inBottom(ele){
        let s = new StackUsingArray();
        let str = [1,2,3,4,5];
        for(let i=0; i<str.length; i++){
            s.push(str[i]);
        }
       this.rec(s, ele);
       return s;
    }

    rec(s, ele){
         
        if(s.isEmpty()){
            s.push(ele);
            return;   
        }

        let stop = s.peek(); 
        s.pop();
        this.rec(s,ele);
        s.push(stop);
    }

}

//let ib = new PushElementInBottom();
//console.log(ib.inBottom(2));


class ReverseStack{
    constructor(){}

    main(){
        let s = new StackUsingArray();
        let str = [1,2,3,4,5];
        for(let i=0; i<str.length; i++){
            s.push(str[i]);
        } 
        let stsize = s.stacksize();
        console.log('before', s);
        this.base(s,stsize);
        return s;
    }

    base(s,size){
        if(s.isEmpty()){
            return;
        } 
        let top = size-s.peek()+1;
    
        s.pop();
        this.base(s,size);
        s.push(top);
    }
}

//let rstack = new ReverseStack();
//console.log(rstack.main());


class SortStack{
    main(){
        let s = new StackUsingArray();
        let str = [2,3,1,5,4];
        for(let i=0; i<str.length; i++){
            s.push(str[i]);
        } 
        let stsize = s.stacksize();
        console.log('before', s);
        this.base(s);
        return s;
    }

    base(s){
        if(s.isEmpty()){
            return;
        }

        let num = s.peek();
        s.pop();
        this.base(s);
        this.sort(s,num); 
    }

    sort(s,num){
        if(s.isEmpty() || (!s.isEmpty() && s.peek() < num)){
            s.push(num);
            return;
        }
        let n = s.peek();
        s.pop();
        this.sort(s,num)
        s.push(n);
    }
}

let sorts = new SortStack();
console.log(sorts.main());