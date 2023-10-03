/* eslint-disable linebreak-style */
export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  const string = [];
  for (const str of set) {
    if (str.startsWith(startString)) {
      string.push(str.slice(startString.length));
    }
  }
  return string.join('-');
}
