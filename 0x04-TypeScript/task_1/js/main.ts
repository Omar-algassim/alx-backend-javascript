interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): void;
}

const printTeacher: printTeacherFunction = (firstname, lastName) => {
    return `${firstname[0]}. ${lastName}`;
}

interface Student {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}
class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';        
    }

    displayName(): string {
        return this.firstName;
    }
}