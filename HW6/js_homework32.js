function sum() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 3 !== 0) {
            sum += i;
        }
    }
    return sum;
}

const result = sum();
console.log(result); // Output: 3367
