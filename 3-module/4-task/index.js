/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let filteredUsers = users.filter(item => item.age <= age);
  filteredUsers = filteredUsers.map(item => (item.name + ', ' + item.balance));
  filteredUsers = filteredUsers.join('\n');
  return filteredUsers
}
