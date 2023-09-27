/* eslint-disable linebreak-style */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = await signUpUser(firstName, lastName)
    .then((result) => ({
      status: 'resolved',
      value: result,
    }));
  const file = await uploadPhoto(fileName)
    .catch((error) => ({
      status: 'rejected',
      value: error.toString(),
    }));
  return Promise.resolve([user, file]);
}
