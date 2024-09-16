var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTask = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
function isDirector(employee) {
    return (employee instanceof Director);
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTask();
    }
    else {
        return employee.workTeacherTasks();
    }
}
function todayClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Math';
    }
    else {
        return 'History';
    }
}

console.log(todayClass('Math'));
console.log(todayClass('History'));
