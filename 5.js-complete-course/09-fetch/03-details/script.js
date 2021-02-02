/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function () {
        let input = document.getElementById("hero-id");
        let target = document.getElementById("target");


        let api_url = '../../_shared/api.json';

        async function xMenHeroes() {
            let response = await fetch(api_url);
            let data = await response.json();
            //console.log(data);
            data = data["heroes"];
            //console.log(data.length);
            for (let hero of data) {
                //console.log(hero.name);
                if (hero.id === parseInt(input.value)) {
                    //console.log(hero.name);
                    let temple = document.getElementById("tpl-hero").content.cloneNode(true);
                    temple.querySelector(".name").innerText = hero.name;
                    temple.querySelector(".alter-ego").innerText = hero.alterEgo;
                    temple.querySelector(".powers").innerText = hero.abilities;
                    target.appendChild(temple);
                }
            }
        }

        xMenHeroes();


    });// your code here
})();
