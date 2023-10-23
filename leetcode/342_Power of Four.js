function isPowerOfFour(n: number): boolean {
    const recur = (n: number): boolean => {
        if (n === 1){
            return true
        }

        if (n < 4 || n % 4 !== 0){
            return false
        }

        return recur(n / 4)
    }

    return recur(n); 
};
