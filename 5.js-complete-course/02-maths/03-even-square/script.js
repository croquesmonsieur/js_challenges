/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
let i;
let square = 0;
        for (i = 1; square < 16; i++) {
            square = i * i;
            alert(square);
        }

            // your code here
//square = i * i; or(=) square = Math.pow( i, 2);
    });

})();
