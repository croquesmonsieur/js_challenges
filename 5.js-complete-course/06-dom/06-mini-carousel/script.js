/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];
    let i = 0;
    document.getElementById("next").addEventListener("click", function () {
        let image = document.querySelector("figure>img");
        let image_s = document.querySelector("figure>img").attributes[0].value;

        function imageChange() {
            i++;
            image_s = gallery[i];
            image.src = image_s;

        }

        if (i < (gallery.length - 1)) {
            imageChange();
        } else {
            i = 0;
            image_s = gallery[i];
            image.src = image_s;
        }

    });

    // your code here

})();
