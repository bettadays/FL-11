 function addOne(x) {
     return x + 1;
 }

 function pipe(number, ...addOneCalls) {
     addOneCalls.forEach(() => {
         number = addOne(number);
     });
     return number;
 }

 console.log(pipe(1, addOne, addOne, addOne));