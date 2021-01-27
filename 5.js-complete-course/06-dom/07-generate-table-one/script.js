/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let myTable = document.createElement("table");
    for (let i = 1; i <= 10; i++) {
        let myRow = myTable.insertRow(0);
        let myCol = myRow.insertCell(0);
    }
    //let myCol = myRow.insertCell(0);
    //myTable.appendChild(myRow);
document.getElementById("target").appendChild(myTable);
    // your code here

})();
