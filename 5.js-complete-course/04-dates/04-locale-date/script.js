/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let time = new Date();
    let minute = time.getMinutes();
    let hour = time.getHours();
    let day = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    let arr_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let today = arr_days[time.getDay()];
    console.log(time.getDay());
    console.log(today);
    document.getElementById("target").innerHTML = today + " " + day + " " + month + " " + year + ", " + hour + "h" + minute;


    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();
