/* eslint-disable linebreak-style */
export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let string = '';
  for (const str of set) {
    if (str.startsWith(startString)) {
      string += `${str.slice(startString.length)}-`;
    }
  }
  if (string.endsWith('-')) {
    string = string.slice(0, -1);
  }
  return string;
}
