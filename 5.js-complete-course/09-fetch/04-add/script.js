/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCodee
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let api_url = '../../_shared/api.json';

    async function xMenHeroes() {
        let response = await fetch(api_url);
        let data = await response.json();
        data = data["heroes"];

        document.getElementById("run").addEventListener("click", function () {
            let inputName = document.getElementById("hero-name");
            let inputEgo = document.getElementById("hero-alter-ego");
            let inputPow = document.getElementById("hero-powers");
            let hero = new Object();

            function makingHeroes() {
                if (inputName.value === "" || inputEgo.value === "" || inputPow.value === "") {
                    alert("please fill in all your hero's properties!");
                } else {
                    hero.id = data.length;
                    hero.name = inputName.value;
                    hero.alterEgo = inputEgo.value;
                    hero.abilities = [inputPow.value.split(',')];
                }

            }

            data.push(hero);

            makingHeroes();
            console.log(data);
        });
    }

    xMenHeroes();


    // your code here
})();
