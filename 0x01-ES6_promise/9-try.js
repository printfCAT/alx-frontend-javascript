/* eslint-disable linebreak-style */
export default function mathFunction(func) {
  try {
    const result = func();
    const arr = [result, 'Guardrail was processed'];
    return arr;
  } catch (error) {
    return [error.message, 'Guardrail was processed'];
  }
}
