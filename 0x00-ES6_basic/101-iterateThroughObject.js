/* eslint-disable linebreak-style */
export default function iterateThroughObject(reportWithIterator) {
  const result = [];
  for (const item of reportWithIterator) {
    result.push(item);
  }
  return result.join(' | ');
}
