/* eslint-disable linebreak-style */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  const results = await Promise.allSettled([userPromise, photoPromise]);
  const arr = [];
  for (const result of results) {
    arr.push({ status: result.status, value: result.value });
  }
  return arr;
}
