/* eslint-disable linebreak-style */
export default function guardrail(mathFunction) {
  try {
    const result = mathFunction();
    const arr = [result, 'Guardrail was processed'];
    return arr;
  } catch (error) {
    return [error.message, 'Guardrail was processed'];
  }
}
