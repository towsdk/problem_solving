// Dynamic problem in 1. Memoization and 2. Tabulization
// First problem is Fibonacci sequence
// The first problem is without memoization

// const fib = (n) => {
//     if(n <= 2) return 1;
//     return fib(n-1) + fib(n-2)
// }

// console.log(fib(5));

// The scond solution is with memoization

const fib = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if( n <=2) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n];
}

console.log(fib(5));
console.log(fib(15));
console.log(fib(50));