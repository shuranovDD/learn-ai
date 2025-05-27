class Calculator {
    add(x, y) {
        return x + y;
    }
    substact(x, y) {
        return x - y;
    }
    multiply(x, y) {
        return x * y;
    }
    divide(x, y) {
        if (y === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return x / y;
    }
    power(base, exponent) {
        return Math.pow(base, exponent);
    }
    squareRoot(x) {
        if (x < 0) {
            throw new Error("Square root of negative number is not defined");
        }
        return Math.sqrt(x);
    }
    logarithm(x, base = 10) {
        if (x <= 0 || base <= 0 || base === 1) {
            throw new Error("Logarithm is not defined for non-positive numbers or base 1");
        }
        return Math.log(x) / Math.log(base);
    }
    absolute(x) {
        return Math.abs(x);
    }
    percentage(x, total) {
        if (total === 0) {
            throw new Error("Total cannot be zero for percentage calculation");
        }
        return (x / total) * 100;
    }
    round(x, precision = 0) {
        return parseFloat(x.toFixed(precision));
    }
    min(...args) {
        if (args.length === 0) {
            throw new Error("At least one argument is required");
        }
        return Math.min(...args);
    }
    max(...args) {
        if (args.length === 0) {
            throw new Error("At least one argument is required");
        }
        return Math.max(...args);
    }
    average(...args) {
        if (args.length === 0) {
            throw new Error("At least one argument is required");
        }
        const sum = args.reduce((acc, val) => acc + val, 0);
        return sum / args.length;
    }
    factorial(n) {
        if (n < 0) {
            throw new Error("Factorial is not defined for negative numbers");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    fibonacci(n) {
        if (n < 0) {
            throw new Error("Fibonacci is not defined for negative numbers");
        }
        if (n === 0) return 0;
        if (n === 1) return 1;
        let a = 0, b = 1, c;
        for (let i = 2; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
    median(...args) {
        if (args.length === 0) {
            throw new Error("At least one argument is required");
        }
        const sorted = args.slice().sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        if (sorted.length % 2 === 0) {
            return (sorted[mid - 1] + sorted[mid]) / 2;
        } else {
            return sorted[mid];
        }
    }

}

module.exports = Calculator;