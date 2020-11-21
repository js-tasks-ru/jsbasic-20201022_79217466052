/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

    let column = { // не забыть, в каком столбике какое значение лежит
        name: 0,
        age: 1, 
        gender: 2,
        status: 3,
    }

    for (let i = 1; i < table.rows.length; i++) { // итерация по строкам таблицы, не считая заголовков
        let row = table.rows[i] // просто чтобы покороче было

        if (row.cells[column.age].innerHTML < 18) {
            row.style = 'text-decoration: line-through'
        }

        let genderClass = (row.cells[column.gender].innerHTML == 'm') ? 
            'male' : 'female';
        row.classList.add(genderClass);

        if (row.cells[column.status].hasAttribute('data-available')) {
            let dataAtribute = 
                (row.cells[column.status].getAttribute('data-available') == 'true') ? 
                'available' : 'unavailable';
            row.classList.add(dataAtribute);
        } else {
            row.setAttribute('hidden', 'true');
        }
    }
}