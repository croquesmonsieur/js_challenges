/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function(){
        let pass_val1 = document.getElementById("pass-one").value;
        let pass_val2 = document.getElementById("pass-two").value;
        if (pass_val1 !== pass_val2){
            let passw1 = document.getElementById("pass-one");
            let passw2 = document.getElementById("pass-two");
            passw1.className += "error";
            passw2.className += "error";
        } else {
            alert("Your password is good!");
        }


    });
    // your code here

})();
