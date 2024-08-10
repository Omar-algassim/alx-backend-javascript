#!/usr/bin/node

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const SignupPromis = signUpUser(firstName, lastName);
  const uploadPhotoPromis = uploadPhoto(filename);
  return Promise.allSettled([SignupPromis, uploadPhotoPromis])
    .then((value) => {
      const resultArray = [];
      value.forEach((promise) => {
        if (promise.status === 'fulfilled') {
          resultArray.push(
            {
              status: promise.status,
              value: promise.value,
            },
          );
        }
        if (promise.status === 'rejected') {
          resultArray.push(
            {
              status: promise.status,
              value: promise.reason,
            },
          );
        }
      });
      return resultArray;
    });
}
