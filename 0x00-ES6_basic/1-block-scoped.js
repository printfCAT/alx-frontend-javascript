/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable linebreak-style */
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
