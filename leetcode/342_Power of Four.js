function isPowerOfFour(n: number): boolean {
    return n > 0 && (n & (n - 1)) === 0 && (n & 0x55555555) === n;
};


/*
0x55555555 is a hexadecimal representation of a 32-bit binary number, where each digit represents 4 binary bits. In binary, it looks like this:

0101 0101 0101 0101 0101 0101 0101 0101
This binary number has a unique property that makes it useful for certain bitwise operations. 
It has set bits (1s) at odd positions, starting from the least significant bit (LSB). The set bits are at positions 1, 9, 17, 25, and so on. 
This property is valuable when you want to check whether a specific bit in an integer is set.

In the context of the isPowerOfFour function, n & 0x55555555 is used to check whether the set bit in n (if it's a power of two) is at an odd position. 
If this condition is true, it indicates that the set bit is at an odd position, which helps determine if n is a power of four.
*/
