/*function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}

drawTriangle(5, '*');*/

function drawTriangle(height, symbol) {
    let i = 1;
    while (i <= height) {
        let row = symbol.repeat(i);
        console.log(row);
        i++;
    }
}

drawTriangle(7, '*');


