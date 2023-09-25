/* eslint-disable linebreak-style */
export default function createEmployeesObject(departmentName, employees) {
  const employeesObject = {};
  employeesObject[departmentName] = [];
  for (const employee of employees) {
    employeesObject[departmentName].push(employee);
  }
  return employeesObject;
}
