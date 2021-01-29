/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let counter = 1;
    let myNum = Math.floor(Math.random() * 99) + 1;
    console.log(myNum);
    let guess = parseInt(prompt("Guess the number if you dare!"));

    while (guess !== myNum) {
        console.log(counter);
        counter++;
          if (guess < myNum) {
            guess = parseInt(prompt("Almost, aim higher!"));
        } else if (guess > myNum) {
            guess = parseInt(prompt("Almost, aim lower!"));
        }
    }
    if (guess === myNum) {
        alert("That's it! You guessed it in: " + counter + "attempt(s)");
    }
    // your code here

})();
