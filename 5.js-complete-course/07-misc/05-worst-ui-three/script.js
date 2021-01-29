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

    let target = document.getElementById("target");
    let butt1 = document.getElementById("fix-part-one");
    let butt2 = document.getElementById("fix-part-two");
    let butt3 = document.getElementById("fix-part-three");
    let butt4 = document.getElementById("fix-part-four");
    let input1 = document.getElementById("part-one");
    let input2 = document.getElementById("part-two");
    let input3 = document.getElementById("part-three");
    let input4 = document.getElementById("part-four");


    function randomNum() {
        let myNum = Math.floor(Math.random() * (499 - 460 + 1) + 460);
        return myNum;
        //console.log(myNum);
    }

    function randomNum2(){
        let myNum = Math.floor(Math.random() * 99) + 1;
        return myNum;
    }

    let stop1 = setInterval(myNum1, 1000);
    function myNum1(){
        input1.value = "";
        input1.value = randomNum()
    }
    myNum1();

    let stop2 = setInterval(myNum2, 1000);
    function myNum2(){
        input2.value = "";
        input2.value = randomNum2()
    }
    myNum2();

    let stop3 = setInterval(myNum3, 1000);
    function myNum3(){
        input3.value = "";
        input3.value = randomNum2()
    }
    myNum2();

    let stop4 = setInterval(myNum4, 1000);
    function myNum4(){
        input4.value = "";
        input4.value = randomNum2()
    }
    myNum2();

    let stop5 = setInterval(total1, 1000);
    function total1() {
        target.innerText = target.innerText.padStart(2, "0");
        target.innerText = input1.value.padStart(2, "0") + input2.value.padStart(2, "0") + input3.value.padStart(2, "0") + input4.value.padStart(2, "0");
    }


    butt1.addEventListener("click", function(){
        clearInterval(stop1);
        input1.value = "0" + parseInt(input1.value);
        total1();
    })
    butt2.addEventListener("click", function(){
        clearInterval(stop2);
        input2.value = parseInt(input2.value);
        if (input2.value < 10){
            input2.value = "0" + parseInt(input2.value);
        }
    })
    butt3.addEventListener("click", function(){
        clearInterval(stop3);
        input3.value = parseInt(input3.value);
        if (input3.value < 10){
            input3.value = "0" + parseInt(input3.value);
        }
    })
    butt4.addEventListener("click", function(){
        clearInterval(stop4);
        input4.value = parseInt(input4.value);
        if (input4.value < 10){
            input4.value = "0" + parseInt(input4.value);
        }
    })
    // your code here

})();
