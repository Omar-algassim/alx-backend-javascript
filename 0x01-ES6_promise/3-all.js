#!/usr/bin/node
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup () {
  uploadPhoto()
    .then(resp =>
      createUser()
        .then(user =>
          console.log(`${resp.body} ${user.firstName} ${user.lastName}`)
        )
        .catch((e) => {
          console.log('Signup system offline');
        }
        )
    )
    .catch((e) => {
      console.log('Signup system offline');
    });
}
