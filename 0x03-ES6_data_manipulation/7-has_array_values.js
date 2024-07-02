#!/usr/bin/node
 
export default function hasValuesFromArray(arr, values) {
    return values.every((x) => arr.includes(x));
 }
