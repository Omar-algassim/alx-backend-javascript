import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(filename);

  return Promise.allSettled([signUpPromise, uploadPhotoPromise])
    .then((values) => {
      const resultArray = [];
      values.forEach((promise) => {
        if (promise.status === 'fulfilled') {
          resultArray.push({
            status: promise.status,
            value: promise.value,
          });
        }
        if (promise.status === 'rejected') {
          resultArray.push({
            status: promise.status,
            value: `${promise.reason}`,
          });
        }
      });
      return resultArray;
    });
}
