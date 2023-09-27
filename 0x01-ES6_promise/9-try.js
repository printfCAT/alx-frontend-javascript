/* eslint-disable linebreak-style */
export default function guardrail(mathFunction) {
  const arr = [];
  try {
    arr.push(mathFunction());
  } catch (error) {
    arr.push(error.message);
  } finally {
    arr.push('Guardrail was processed');
  }
  return arr;
}
