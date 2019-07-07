let promptMsg = 'Please enter a length of side';
let alertMsg = 'Please enter a digit, for non integral use "." sign, also digit should be > 0';
let equivalentMsg = 'Equivalent triangle';
let isoscelesMsg = 'Isosceles triangle';
let normalMsg = 'Normal triangle';
let noexistMsg = 'Triangle doesn’t exist';



let a = +prompt(`${promptMsg} A`);
while (isNaN(a) || a < 0) {
    alert(alertMsg);
    a = +prompt(`${promptMsg} A`);
}

let b = +prompt(`${promptMsg} B`);
while (isNaN(b) || b < 0) {
    alert(alertMsg);
    b = +prompt(`${promptMsg} B`);
}

let c = +prompt(`${promptMsg} C`);
while (isNaN(c) || c < 0) {
    alert(alertMsg);
    c = +prompt(`${promptMsg} C`);
}

if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        console.log(equivalentMsg);
    } else if (a === b || b === c || a === c) {
        console.log(isoscelesMsg);
    } else {
        console.log(normalMsg);
    }
} else {
	console.log(noexistMsg);
}