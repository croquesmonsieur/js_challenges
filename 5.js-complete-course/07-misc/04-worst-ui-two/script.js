/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let telNum = document.getElementById("target");
    console.log(telNum);
    let butt1 = document.getElementById("part-one");
    let butt2 = document.getElementById("part-two");
    let butt3 = document.getElementById("part-three");
    let butt4 = document.getElementById("part-four");

    function total() {
        telNum.innerText = "0" + butt1.innerText + butt2.innerText + butt3.innerText + butt4.innerText;
    }

        butt1.addEventListener("click", function () {
            butt1.innerText = String((parseInt(butt1.innerText) + 1));
            if (butt1.innerText <= butt1.getAttribute("data-max")) {
                total();
            } else {
                butt1.innerText = butt1.getAttribute("data-min");
            }
        })

        butt2.addEventListener("click", function () {
            butt2.innerText = String((parseInt(butt2.innerText) + 1));
            if (butt2.innerText <= butt2.getAttribute("data-max")) {
                total();
            } else {
                butt2.innerText = butt2.getAttribute("data-min");
            }
        })

        butt3.addEventListener("click", function () {
            butt3.innerText = String((parseInt(butt3.innerText) + 1));
            if (butt3.innerText <= butt3.getAttribute("data-max")) {
                total();
            } else {
                butt1.innerText = butt3.getAttribute("data-min");
            }
        })

        butt4.addEventListener("click", function () {
            butt4.innerText = String((parseInt(butt4.innerText) + 1));
            if (butt4.innerText <= butt4.getAttribute("data-max")) {
                total();
            } else {
                butt4.innerText = butt4.getAttribute("data-min");
            }
        })


    // your code here

})();
