#!/usr/bin/node
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const Uploadpromis = uploadPhoto();
  const CreateProms = createUser();

  return Promise.all([Uploadpromis, CreateProms])
    .then((value) => {
      console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
