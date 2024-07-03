#!/usr/bin/node

export default function cleanSet(arr, startString) {
  if (startString === undefined || typeof startString !== 'string') {
    return '';
  }
  return arr.filter((x) => 
    (x !== undefined ? x.startsWith(startString) : '')).map((x) => 
        (x !== undefined ? x.slice(startString.length) : '')).join('-')
};
