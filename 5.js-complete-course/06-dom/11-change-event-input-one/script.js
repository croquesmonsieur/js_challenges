/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    document.getElementById("pass-one").addEventListener("keypress", function (e) {

        let passCount = document.getElementById("pass-one").value;
        console.log(passCount.length);
        let myCount = document.getElementById("counter").innerText;
        console.log(myCount);

        myCount = passCount.length;
        console.log(myCount + "/10");
        document.getElementById("counter").innerText = myCount + "/10";

        if (passCount.length >= 10) {
            e.preventDefault()
        } else {
            myCount = passCount.length;
        }

    });


    // your code here

})();
