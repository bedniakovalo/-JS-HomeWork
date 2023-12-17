/*function pow(numb, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= numb;
    }
    return result;
}

const result = pow(3, 3);
console.log(result);*/

function pow(numb, exponent) {
    return Math.pow(numb, exponent);
}

const result = pow(2, 8);
console.log(result);
