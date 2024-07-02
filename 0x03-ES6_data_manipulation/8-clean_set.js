#!/usr/bin/node

export default function cleanSet(arr, startString) {
    if (!arr.sArray()) {
        return [];
    }
    return arr.filter((x) => x.startsWith(startString)).map((x) => x.slice(startString.length));
}