const isInteger = a => {
    let rounded = Math.round(a);
    if (rounded === a) {
        return true;
    } else {
        return false;
    }
}

console.log(isInteger(5.0));