/* eslint-disable linebreak-style */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => result.map((result) => ({
      status: result.status,
      value: result,
    }))).catch((error) => [
      {
        status: error.status,
        value: error,
      },
    ]);
}
