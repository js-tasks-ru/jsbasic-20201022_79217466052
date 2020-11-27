/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.name = rows.name;
    this.age = rows.age;
    this.salary = rows.salary;
    this.city = rows.city;
    this.elem = this.render(rows);
  }


  render(rows) {
    let table = document.createElement('table');

    // собираем шапку
    const head = document.createElement('THEAD');
    let tr = document.createElement('tr');
    for (let property in rows[0]) {
        let th = document.createElement('th');
        th.innerHTML = String(property).toUpperCase();
        tr.appendChild(th)
    }

    //добавляем в шапку удаление
    let thRemove = document.createElement('th');
    thRemove.innerHTML = 'УДОЛИ';
    tr.appendChild(thRemove);

    head.appendChild(tr);
    table.appendChild(head); // теперь у нас есть шапка

    const body = document.createElement('TBODY')

    for (let person of rows) {
      let tr = document.createElement('tr');

      for (let property in person) {
        let th = document.createElement('td');
        th.innerHTML = person[property];
        tr.appendChild(th)
      }
      tr.appendChild(this.makeRemoveButton())
      body.appendChild(tr)
    }

    table.appendChild(body); // теперь у нас есть тело

    return table;
  }

  // собираем кнопки удаления
  makeRemoveButton() {
    let tdRemove = document.createElement('td');
    let buttonRemove = document.createElement('button');
    buttonRemove.innerHTML = 'X';
    buttonRemove.addEventListener('click', this.onClick)
    tdRemove.appendChild(buttonRemove)
    return tdRemove
  }

  onClick(ev) {
    let row = ev.target.parentElement.parentElement; //мне тоже не нравится
    row.remove();
  }
}