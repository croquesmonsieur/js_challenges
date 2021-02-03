/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let info = false;

    while (info === false) {
        if (info === false){
            let age = prompt('Please tell us your age:');
            let gender = prompt('Please tell us your gender:');
            let town = prompt('Please tell us in which town you live:');
            info = confirm('please confirm your input: ' + age + ' ' + gender + ' ' + town);
        } if (info === false){
            alert("Warning, you didn't fill in the form!");
        } else {
            alert('Thank you!');
        }
    }

    // your code here

})();
