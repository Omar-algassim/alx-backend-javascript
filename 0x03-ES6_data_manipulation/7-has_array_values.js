#!/usr/bin/node

export default function hasValuesFromArray(set, arr) {
  for (const item of arr) {
    if (!set.has(item)) {
      return false;
    }
  }
  return true;
}
