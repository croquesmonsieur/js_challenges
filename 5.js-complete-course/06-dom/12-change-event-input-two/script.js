/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("pass-one").addEventListener("keypress", function () {

        let passW = document.getElementById("pass-one").value;
        let valCheck = document.getElementById("validity").innerText;
        let twoDigits = new RegExp("[0-9].*[0-9]");

        if (passW.length >= 7 && twoDigits.test(passW)){
            valCheck = "OK!";
            document.getElementById("validity").innerText = valCheck;
        } else {
            valCheck = "Not oke!";
            document.getElementById("validity").innerText = valCheck;
        }


    });

    // your code here

})();
