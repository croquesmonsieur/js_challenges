/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let myWAveTeXt = document.getElementById("target").innerText;
    let container = document.getElementById("target");
//container.style.fontSize = ("smaller");
    //console.log(container);
    container.innerText = "";
    let myChars = myWAveTeXt.split('');
    //let newWave = "";
    console.log(myChars);

    function effect(){
        myChars.forEach(function(element,i){
            let char = document.createElement("span");
            char.innerText = element;
            char.style.fontSize = (i + 3) + "px";

            container.appendChild(char);
        });
    }
    effect();
    document.getElementById("target").innerText;

    //span1.style.fontSize = 'smaller';
    //container.appendChild(span1);
    //console.log(container);




    // your code here

})();
