/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
/*let addition = eval("x + y");
let substraction = eval(x - y);
let multiplication = eval(x * y);
let division = eval(x / y);

    function calc()
    {
        let x = document.getElementById("op-one").value;
        let y = document.getElementById("op-two").value;
        eval("x + y");
    }
*/

(document.getElementById("addition").addEventListener("click", function my_add() {
    let x = parseFloat(document.getElementById("op-one").value);
    let y = parseFloat(document.getElementById("op-two").value);
        let result = (x) + (y);
        alert('The result is: ' + result);// perform an addition
    }));


    document.getElementById("substraction").addEventListener("click", function my_subtr() {
        let x = parseFloat(document.getElementById("op-one").value);
        let y = parseFloat(document.getElementById("op-two").value);
        let result = (x) - (y);
        alert('The result is: ' + result);// perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", function my_multipl() {
        let x = parseFloat(document.getElementById("op-one").value);
        let y = parseFloat(document.getElementById("op-two").value);
        let result = (x) * (y);
        alert('The result is: ' + result);// perform an multiplication
    });

    document.getElementById("division").addEventListener("click", function my_divis() {
        let x = parseFloat(document.getElementById("op-one").value);
        let y = parseFloat(document.getElementById("op-two").value);
        let result = (x) / (y);
        alert('The result is: ' + result);// perform an division
    });

})();
