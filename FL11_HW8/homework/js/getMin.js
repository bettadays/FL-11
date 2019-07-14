console.log(getMin(0, 3, -5000, 5, 7, -100, 1));

function getMin() {
    let min = Infinity;
    const argumentsQty = arguments.length;

    for (let i = 0; i < argumentsQty; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}


