/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let text = document.getElementById("target").innerText;
    document.getElementById("target").innerText = "";
    console.log(text);
    let i = 0;
    function typewriter(){
        if (i < text.length){
            document.getElementById("target").innerHTML += text.charAt(i);
            i++;
        }
        setTimeout(typewriter, 100);
    }
typewriter();

    // your code here

})();
