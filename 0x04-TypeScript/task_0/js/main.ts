
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'USA'
};

const student2: Student = {
    firstName: 'Omar',
    lastName: 'Algassim',
    age: 19,
    location: 'KH'
};

const studentsList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);
studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = document.createElement('tr');
    table.appendChild(row);
    const firstName: HTMLTableDataCellElement = document.createElement('td');
    firstName.textContent = student.firstName;
    row.appendChild(firstName);
    const location: HTMLTableDataCellElement = document.createElement('td');
    location.textContent = student.location;
    row.appendChild(location);
}
);
