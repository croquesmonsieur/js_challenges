/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let myTable = document.createElement("table");
    let myRow, myCol;

    for (let i = 0; i < 10; i++) {
          myRow = myTable.insertRow();
        for (let j = 0; j < 10; j++) {
              myCol = myRow.insertCell();
              myCol.innerText = (i + 1) * (j + 1);
        }
    }


    document.getElementById("target").appendChild(myTable);
    // your code here

})();
