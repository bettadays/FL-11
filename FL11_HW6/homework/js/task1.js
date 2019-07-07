let xMsg = 'Please enter x-coordinate for point';
let yMsg = 'Please enter y-coordinate for point';
let alertMsg = 'Please enter a digit, for non integral use "." sign';
const divisor = 2;


let a1 = +prompt(`${xMsg} A`);
while (isNaN(a1)) {
    alert(alertMsg);
    a1 = +prompt(`${xMsg} A`);
}

let a2 = +prompt(`${yMsg} A`);
while (isNaN(a2)) {
    alert(alertMsg);
    a2 = +prompt(`${yMsg} A`);
}

let b1 = +prompt(`${xMsg} B`);
while (isNaN(b1)) {
    alert(alertMsg);
    b1 = +prompt(`${xMsg} B`);
}

let b2 = +prompt(`${yMsg} B`);
while (isNaN(b2)) {
    alert(alertMsg);
    b2 = +prompt(`${yMsg} B`);
}

let c1 = +prompt(`${xMsg} C`);
while (isNaN(c1)) {
    alert(alertMsg);
    c1 = +prompt(`${xMsg} C`);
}

let c2 = +prompt(`${yMsg} C`);
while (isNaN(c2)) {
    alert(alertMsg);
    c2 = +prompt(`${yMsg} C`);
}

let check1 = (a1 + c1) / divisor === b1;
let check2 = (a2 + c2) / divisor === b2;
let result = check1 && check2;


console.log(result)