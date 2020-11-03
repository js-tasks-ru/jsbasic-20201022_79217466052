/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let newStr = str.split('-');
  newStr = newStr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));
  newStr = newStr.join('')
  return newStr
}
