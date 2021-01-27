/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function randomNum() {
        let myNum = Math.floor(Math.random() * 99);
        setInterval(randomNum, 5000);
        console.log(myNum);
    }
randomNum();
    function randomNum2(){
        let myNum2 = Math.floor(Math.random() * 499);
        setInterval(randomNum, 5000);
        console.log(myNum2);
    }
    randomNum2();

    let butt1 = document.getElementById("fix-part-one");
    let butt2 = document.getElementById("fix-part-two");
    let butt3 = document.getElementById("fix-part-three");
    let butt4 = document.getElementById("fix-part-four");
    let input1 = document.getElementById("part-one");
    let input2 = document.getElementById("part-two");
    let input3 = document.getElementById("part-three");
    let input4 = document.getElementById("part-four");

    butt1.addEventListener("click", function(){
         randomNum2();
        input1.innerText = myNum2;
    })
    // your code here

})();
