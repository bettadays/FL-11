const reverseNumber = number => {

    let flag = true;
    let reversed = '';
    let digitParse = [];
    let numberIter;

    const signCheck = number * -1;

    if (signCheck > 0) {
        digitParse.push('-');
        number = Math.abs(number);
    }

    if (number < 10) {
        digitParse.push(number);

        const arrLength = digitParse.length;
        for (let i = 0; i < arrLength; i++) {
            reversed += digitParse[i];
        }
        return reversed;
    }

    while (flag) {

        for (let i = 0; i < 10; i++) {
            numberIter = number - i;

            if (numberIter % 10 === 0) {
                digitParse.push(i);

                if (numberIter < 10) {
                    flag = false;
                    break;
                }
                numberIter /= 10;
                number = numberIter;
            }
        }
    }

    const arrLength = digitParse.length;
    for (let i = 0; i < arrLength; i++) {
        reversed += digitParse[i];
    }
    reversed = +reversed;
    return reversed;
}

console.log(reverseNumber(-3450));