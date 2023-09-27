/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  return promise.then((res) => {
    const response = { status: 200, body: 'Success' };
    console.log('Got a response from the API');
    return response;
  }).catch((error) => new Error());
}
