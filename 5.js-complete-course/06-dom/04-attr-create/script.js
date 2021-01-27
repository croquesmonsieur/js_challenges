/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    //let image = document.getElementById("source");
    //console.log(image);
    let image_s = document.getElementById("source").attributes[1].value;
    console.log(image_s);
    let newImage = new Image();
    newImage.src = image_s;
    console.log(image_s);
    document.getElementById("target").src = image_s;
    console.log(newImage);
    console.log(document.getElementById("target"));

    function removeImage(image_s) {
        image_s.parentNode.removeChild(image_s);
    }

    removeImage(document.getElementById("source"));


    // your code here

})();
