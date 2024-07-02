#!/usr/bin/node

export default function getStudentIdsSum(arr) {
    return arr.reduce((accumulater, currentValue) => accumulater + currentValue.id, 0)
};
