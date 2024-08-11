#!/usr/bin/node

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const uploadPromis = await uploadPhoto();
    const createPromis = await createUser();
    return {
      photo: uploadPromis,
      user: createPromis,
    };
  } catch (e) {
    return { photo: null, user: null };
  }
}
