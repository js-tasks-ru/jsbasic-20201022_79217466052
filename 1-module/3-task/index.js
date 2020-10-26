/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */

function ucFirst(str) {
  let newString = ( str.length > 0 ) ? str[0].toUpperCase() + str.slice(1) :
    str;
  return newString
}
