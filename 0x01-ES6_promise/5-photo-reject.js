#!/usr/bin/node

export default function uploadPhoto(filename) {
  return new Promise((reject) => {
    if (filename) {
      reject(new Error(`${filename} cannot be processed`));
    }
  });
}
