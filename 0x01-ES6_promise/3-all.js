/* eslint-disable linebreak-style */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResult, userResult] = results;

      if (photoResult.status === 200 && userResult.firstName && userResult.lastName) {
        console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
      } else {
        console.log('Signup system offline');
      }
    });
}
