/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  if ( str.length >= maxlength ) {
    let newString = str.substr(0, maxlength - 1) + '…';
    return newString;
  }
  return str;
}
