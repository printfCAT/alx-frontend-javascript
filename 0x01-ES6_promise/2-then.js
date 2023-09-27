/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  return promise
    .then((res) => ({ status: 200, body: 'Success' }))
    .catch((error) => new Error())
    .finally((fin) => console.log('Got a response from the API'));
}
