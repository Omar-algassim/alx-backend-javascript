#!/usr/bin/node

export default function getListStudentIds(arr) {
    if (!arr.sArray()) {
        return [];
    }
    return arr.map((x) => x.id);
};
