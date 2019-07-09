let totalPrize = 0;
let possiblePrize = 100;
let stageCounter = 0;

let range = [0, 1, 2, 3, 5, 6, 7, 8];


let check;



let gamerGuess;

let welcomeMsg = 'Do you want to play a game?';
let cancelationMsg = 'You did not become a billionaire, but can.';
let anotherGameOffer = 'Do you want to play another game?';





let offer = confirm(welcomeMsg);

if (offer === false) {
    alert(cancelationMsg);
}
while (offer) {
    let attemptsLeft = 3;


     let minNumber = range[0];
    let maxNumber = range[range.length-1];

    for (; attemptsLeft > 0; attemptsLeft--) {
      let presetNumber = minNumber + Math.random() * (maxNumber - minNumber);
        presetNumber = Math.round(presetNumber);
       

let gameMsgPart1 = `Chose a roulette pocket number from ${minNumber} to ${maxNumber}\n Atempts left: ${attemptsLeft}\n`
let gameMsgPart2 = `Total prize: ${totalPrize}\n Possible prize on current attempt: ${possiblePrize} $`




        gamerGuess = +prompt(` ${gameMsgPart1} ${gameMsgPart2}  `);



        check = gamerGuess === presetNumber;
       

        if (attemptsLeft === 1 && !check) {
            alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
            offer = confirm(anotherGameOffer);
            if (offer) {
             possiblePrize = 100;
             totalPrize = 0;
             range.length = 8;
                break;

            }

        } else if (check) {
            totalPrize = totalPrize + possiblePrize;

            offer = confirm(`Congratulation, you won!   Your prize is: ${totalPrize}   $. Do you want to continue?`);

            if (!offer) {
                alert(`Thank you for your participation. Your prize is: ${totalPrize} $`);
                offer = false;

                break;
            } else {
            stageCounter += 1;
            range.push(maxNumber+1);
                range.push(maxNumber+2);
                range.push(maxNumber+3);
                range.push(maxNumber+4);
                possiblePrize = 100 * Math.pow(2,stageCounter);
                break;

            }

        } else {
        possiblePrize /= 2;


    }

    }
}
