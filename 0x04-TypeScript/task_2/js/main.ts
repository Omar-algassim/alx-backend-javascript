interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTask(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTask(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
        
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

function isDirector(employee: Director | Teacher) {
    return (employee instanceof Director);
}

function executeWork(employee: Director | Teacher) {
    if (isDirector(employee)) {
        return employee.workDirectorTask();
    } else {
        return employee.workTeacherTasks();
    }
}

type Subjects = 'Math' | 'History';

function todayClass (todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else {
        return 'Teaching History';
    }
}

console.log(todayClass('Math'));
console.log(todayClass('History'));