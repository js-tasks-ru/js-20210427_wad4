/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  if (param !== 'asc' && param !== 'desc') {
    throw new Error(`Некорректное значение параметра param: ${param}`);
  }
  const order = param === 'asc' ? 1 : -1;
  const result = [...arr];
  return result.sort(
    (first, second) => first.localeCompare(second, ['ru', 'en'], {caseFirst: 'upper'}) * order
  );
}
