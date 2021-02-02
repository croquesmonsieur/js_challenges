/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function() {
        let inputId = document.getElementById("hero-id");

        let api_url = '../../_shared/api.json';

        async function xMenHeroes() {
            let response = await fetch(api_url);
            let data = await response.json();
            data = data["heroes"];
            let index = data.findIndex((value) => {
                return value;
            })

            for (let hero of data){
                if (hero.id === parseInt(inputId.value)){
                    data.splice((hero.id - 1), 1);
                    console.log(data);
                }

            }


        }
        xMenHeroes();

        });
    // your code here
})();
