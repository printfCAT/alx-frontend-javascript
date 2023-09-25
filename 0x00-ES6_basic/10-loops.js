/* eslint-disable linebreak-style */
export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    // eslint-disable-next-line no-param-reassign
    array[array.indexOf(value)] = appendString + value;
  }

  return array;
}
