/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("slider").min = "0460000000";
    document.getElementById("slider").max = "0499999999";
    document.getElementById("slider").value = "0460000000";
let slider = document.getElementById("slider");
let telnum = document.getElementById("target");
telnum.innerHTML = slider.value;
slider.oninput = function (){
    telnum.innerHTML = "0" + this.value;
}
    // your code here

})();
