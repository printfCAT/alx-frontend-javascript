/* eslint-disable linebreak-style */
export default function cleanSet(set, startString) {
  if (
    typeof set !== 'object'
      || typeof startString !== 'string'
      || startString.length === 0) {
    return '';
  }
  let result = '';

  for (const value of set) {
    if (value.startsWith(startString)) {
      result += `${value.slice(startString.length)}-`;
    }
  }

  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }

  return result;
}
