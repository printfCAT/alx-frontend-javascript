/* eslint-disable linebreak-style */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const response = { status: 200, body: 'Success' };
      resolve(response);
    } else {
      reject('The fake API is not working currently');
    }
  });
}
