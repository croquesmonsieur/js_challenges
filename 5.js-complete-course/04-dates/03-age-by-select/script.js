/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function (){
        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year = document.getElementById("dob-year").value;
        let time = new Date();
        let time_day = time.getDate();
        let time_month = time.getMonth();
        let time_year = time.getFullYear();
        console.log(time_day + " " + time_month + " " + time_year);
        let birthday = time_year - year;
        console.log(birthday);

        alert("Your birthday is: " + day + "/" + month + "/" + year + ". That makes you " + birthday + " years old.");

    });
    // your code here

})();
