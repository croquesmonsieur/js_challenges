/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
document.getElementById("run").addEventListener("click", function(){

    let arr_num = [];
    while (arr_num.length < 10){
        let number = Math.floor(Math.random() * 100);
        arr_num.push(number);

        }
    let min_num = Math.min(...arr_num);
    let max_num = Math.max(...arr_num);
    let sum_num = arr_num.reduce(function (a, b){
        return a + b;
    }, 0);
    let avg_num = (sum_num / arr_num.length);

    for (let i = 1; i <= arr_num.length; i++) {
        document.getElementById("n-"+i).innerHTML = arr_num[i-1];
    }
    document.getElementById("min").innerHTML = min_num;
        document.getElementById("max").innerHTML = max_num;
            document.getElementById("sum").innerHTML = sum_num;
                document.getElementById("average").innerHTML = avg_num;





})
    // your code here

})();
