#include<iostream>
using namespace std;

void pattern10(){
/*
         *
        **
       ***
      ****
     *****
    ******
   *******
  ********
 *********
**********
**********
 *********
  ********
   *******
    ******
     *****
      ****
       ***
        **
         *
*/

int n =10;
  int i=1,s,j;
  
   while (i <= n)
   {	
   		s=i; j=1;
   		 while(s<n){
        	cout << " ";
            s++;
        }
        while(j <= i){
        	cout << "*";
            j++;
        } 
        cout << "\n";
        i++;
   }
  i=0;
  while (i < n)
   {
   		s=0; j=n;
   		 while(s<i){
        	cout << " "; s++;
        }
        while(j > i){
        	cout << "*";
            j--;
        } 
     
        cout << "\n";
        i++;
   }
}

void pattern9(){
/*

         * * * * * * * * * * 
        * * * * * * * * * * 
       * * * * * * * * * * 
      * * * * * * * * * * 
     * * * * * * * * * * 
    * * * * * * * * * * 
   * * * * * * * * * * 
  * * * * * * * * * * 
 * * * * * * * * * * 
* * * * * * * * * * 

*/
int n =10;
  int i=1,s,j;
  
   while (i <= n)
   {	
   		s=i;
        j=1;
   		 while(s<n){
        	cout << " ";
            s++;
        }
        while(j <= n){
        	cout << "* ";
            j++;
        } 
        cout << "\n";
        i++;
   }
}

void pattern8(){
/*

*          
* *         
* * *        
* * * *       
* * * * *      
* * * * * *     
* * * * * * *    
* * * * * * * *   
* * * * * * * * *  
* * * * * * * * * * 
* * * * * * * * *  
* * * * * * * *   
* * * * * * *    
* * * * * *     
* * * * *      
* * * *       
* * *        
* *         
* 

*/

int n =10;
  int i=1,s,j;
  
   while (i <= n)
   {	
   		s=i;
        j=1;
   		 
        while(j <= i){
        	cout << "* ";
            j++;
        } 
     while(s<n){
        	cout << " ";
            s++;
        }
        cout << "\n";
        i++;
   }
  i=1;
  while (i < n)
   {
   		s=0; j=n;
   		 
        while(j > i){
        	cout << "* ";
            j--;
        } 
     while(s<i){
        	cout << " "; s++;
        }
        cout << "\n";
        i++;
   }
}

void pattern7(){
/*

*          
* *         
* * *        
* * * *       
* * * * *      
* * * * * *     
* * * * * * *    
* * * * * * * *   
* * * * * * * * *  
* * * * * * * * * * 
* * * * * * * * * * 
* * * * * * * * *  
* * * * * * * *   
* * * * * * *    
* * * * * *     
* * * * *      
* * * *       
* * *        
* *         
*

*/

int n =10;
  int i=1,s,j;
  
   while (i <= n)
   {	
   		s=i;
        j=1;
   		 
        while(j <= i){
        	cout << "* ";
            j++;
        } 
     while(s<n){
        	cout << " ";
            s++;
        }
        cout << "\n";
        i++;
   }
  i=0;
  while (i < n)
   {
   		s=0; j=n;
   		 
        while(j > i){
        	cout << "* ";
            j--;
        } 
     while(s<i){
        	cout << " "; s++;
        }
        cout << "\n";
        i++;
   }
}

void pattern6(){
    //Example 6: Program to print the full star diamond pattern in C.

/*
         * 
        * * 
       * * * 
      * * * * 
     * * * * * 
    * * * * * * 
   * * * * * * * 
  * * * * * * * * 
 * * * * * * * * * 
* * * * * * * * * * 
 * * * * * * * * * 
  * * * * * * * * 
   * * * * * * * 
    * * * * * * 
     * * * * * 
      * * * * 
       * * * 
        * * 
         * 
*/

int n =10;
  int i=1,s,j;
  
   while (i <= n)
   {	
   		s=i;
        j=1;
   		 while(s<n){
        	cout << " ";
            s++;
        }
        while(j <= i){
        	cout << "* ";
            j++;
        } 
        cout << "\n";
        i++;
   }
  i=1;
  while (i < n)
   {
   		s=0; j=n;
   		 while(s<i){
        	cout << " "; s++;
        }
        while(j > i){
        	cout << "* ";
            j--;
        } 
        cout << "\n";
        i++;
   }
}

void pattern5(){
// Example : Program in C to print the inverted half star pyramid pattern.

/*
*******************
***************** 
***************  
*************   
***********    
*********     
*******      
*****       
***        
* 

*/

int n =10;
  int i=n,s,j;
  
   while (i >=1)
   {	
   		s=i;
        j=1;
   		
        while(j <= i*2-1){
        	cout << "*";
            j++;
        }
        while(s<n){
        	cout << " ";
            s++;
        }
        
        cout << "\n";
        i--;
   }

}

void pattern4(){
/*
* * * * * * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * * * * * 
  * * * * * * * * * * * * * * * 
   * * * * * * * * * * * * * 
    * * * * * * * * * * * 
     * * * * * * * * * 
      * * * * * * * 
       * * * * * 
        * * * 
         * 
*/

int n =10;
  int i=n,s,j;
  
   while (i >= 1)
   {	
   		s=i;
        j=1;
   		while(s<n){
        	cout << " ";
            s++;
        }
        while(j <= i*2-1){
        	cout << "* ";
            j++;
        }
        
        cout << "\n";
        i--;
   }

}

void pattern3(){
// Example : Program in C to print inverted star pyramid pattern.

/*
*******************
 *****************
  ***************
   *************
    ***********
     *********
      *******
       *****
        ***
         *
*/

int n =10;
  int i=n,s,j;
  
   while (i!= 0 && i <= n) // while (i >= 1)
   {	
   		s=i;
        j=1;
   		while(s<n){
        	cout << " ";
            s++;
        }
        while(j <= i*2-1){
        	cout << "*";
            j++;
        }
        
        cout << "\n";
        i--;
   }

}

void pattern2(){
// Example 3: Program in C to print half star pyramid pattern.

    /*
*         
***        
*****       
*******      
*********     
***********    
*************   
***************  
***************** 
*******************
    */

   int n =10;
  int i=1,s,j;
  
   while (i <= n)
   {	
   		s=i;
        j=1;
   		
        while(j <= i*2-1){
        	cout << "*";
            j++;
        }
        while(s<n){
        	cout << " ";
            s++;
        }
        cout << "\n";
        i++;
   }
}

void pattern1(){
// Example 1: Program in C to print star pyramid pattern.

/*
         *
        ***
       *****
      *******
     *********
    ***********
   *************
  ***************
 *****************
*******************

*/

int n =10,i=1,s,j;
  
   while (i <= n)
   {	
   		s=i;
        j=1;
   		while(s<n){
        	cout << " ";
            s++;
        }
        while(j <= i*2-1){
        	cout << "*";
            j++;
        }
        
        cout << "\n";
        i++;
   }

}


int main() {
    pattern1();
}