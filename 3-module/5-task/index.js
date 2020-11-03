/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {

  str = str.split(' ');
  str = str.map(item => item.split(','));
  str = [].concat(...str);
  str = str.map(item => Number(item));
  str = str.filter(item => isFinite(item));
  str.sort( (a, b) => a - b );

  let result = {
    min: str[0],
    max: str[str.length - 1],
  };


  console.log(result);
  return result
}
