/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
export default function createIteratorObject(report) {
  const result = [];
  for (const item of Object.keys(report.allEmployees)) {
    for (const emp of report.allEmployees[item]) {
      result.push(emp);
    }
  }
  return result;
}
