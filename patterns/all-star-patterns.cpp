#include<iostream>
using namespace std;

void pattern4(){
    
}

void pattern3(){
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
  
   while (i!= 0 && i <= n)
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