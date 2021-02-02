/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function () {
        let api_url = '../../_shared/api.json';

        async function getHeroes() {
            let response = await fetch(api_url);
            let data = await response.json();
            data = data["heroes"];

            data.forEach(hero => {
                let temple = document.getElementById("tpl-hero").content.cloneNode(true);
                temple.querySelector(".name").innerText = hero.name;
                temple.querySelector(".alter-ego").innerText = hero.alterEgo;
                temple.querySelector(".powers").innerText = hero.abilities;
                document.getElementById("target").appendChild(temple);
                //name = hero.name;
                //alterEgo = hero.alterEgo;
                //abilities = hero.abilities;
            })

        }

        getHeroes();


    });

    // your code here
})();
