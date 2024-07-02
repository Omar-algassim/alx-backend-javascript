#!/usr/bin/node

export default function updateUniqueItems(arr) {
    if (!Array.isArray(arr)) {
        return [];
    }
    return arr.reduce((acc, x) => {
        if (acc.includes(x)) {
            acc[acc.indexOf(x)] = x;
        }
        return acc;
    }, arr);
}
