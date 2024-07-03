#!/usr/bin/node

export default function updateStudentGradeByCity(arr, city, newGrade) {
  return arr.filter((x) => x.location === city).map((x) => {
    if (newGrade.find((y) => y.studentId === x.id)) {
      x.grade = newGrade.find((y) => y.studentId === x.id).grade;
    } else {
      x.grade = 'N/A';
    }
    return x;
  });
}
