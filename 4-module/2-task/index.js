/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    i = 0
    for (let row of table.rows) {
        row.cells[i].style.backgroundColor = 'red';
        i++;
    }
}
