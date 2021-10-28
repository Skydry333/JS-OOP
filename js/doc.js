//! task 1
/*
    class Student{
        constructor(fullName, direction ){
            this._fullName = fullName;
            this._direction = direction;
        }
        get direction(){
            return this._direction;
        }
        set direction(value){
            
            this._direction = value;
        }
        showFullName(){
            return this._fullName;
        }
        nameIncludes(data){
            let x = this.showFullName().split(' ');
            if(data === x[0] || data === x[1] || data === this.showFullName()) {
                return true;
            } else{
                return false;
            }
        }
        static studentBuilder(fullName, direction){
            let new_stud = {
                fullName: fullName,
                direction: direction
            }
            return new_stud;
        }
    }
    let student = new Student('Andrii Kitsak', 'JS');

    const stud1 = new Student('Ivan Petrenko', 'web');
    const stud2 = new Student('Sergiy Koval', 'python');
    const stud3 = Student.studentBuilder('Ihor Kohut', 'qc');
    console.log(student.nameIncludes('Andrii Kitsak'))

*/
//?або
/*
    class Student{
        constructor(fullName, direction ){
            this._fullName = fullName;
            this._direction = direction;
        }
        get direction(){
            return this._direction;
        }
        set direction(value){
            
            this._direction = value;
        }
        showFullName(){
            return this._fullName;
        }
        nameIncludes(data){
            let x = this.showFullName().split(' ');
            if(this.showFullName().includes(data)) {
                return true;
            } else{
                return false;
            }
        }
        static studentBuilder(fullName, direction){
            let new_stud = {
                _fullName: fullName,
                _direction: direction
            }
            return new_stud;
        }
    }
    let student = new Student('Andrii Kitsak', 'JS');

    const stud1 = new Student('Ivan Petrenko', 'web');
    const stud2 = new Student('Sergiy Koval', 'python');
    const stud3 = Student.studentBuilder('Ihor Kohut', 'qc');

*/

//! task 2
/*
    class Person{
        constructor(name, surname){
            this._name = name;
            this._surname = surname;
        }
        showFullName(){
            return `${this._name} ${this._surname}`
        }
    }
    class Student extends Person{
        constructor(name, surname, year){
            super(name, surname);
            this._year = year;
        }
        showFullName(midleName){
            return `${this._name} ${this._surname} ${midleName}`;
        }
        showCourse(){
            let date = new Date();
            return date.getFullYear() - this._year;
        }
    }
    const stud1 = new Student("Petro", "Petrenko", 2017);
    console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
    console.log("Current course: " + stud1.showCourse()); //Current course: 4
*/

//! task 3
/*
    class Worker {
        constructor(fullName,dayRate,workingDays){
            this.fullName = fullName;
            this.dayRate = dayRate;
            this.workingDays = workingDays;
        }
        get setExp() {
            return (this._setExp);
            }
            set setExp(value) {
                this.showExp = value;
            return (this._setExp);
            }
        #experience = 1.2;
        showExp = this.#experience

        showSalary(){
            let salary = (this.dayRate * this.workingDays);
            return console.log(`${this.fullName} salary: ${salary}`);
        }
        showSalaryWithExperience(){
            let salaryWithExperience = (this.dayRate * this.workingDays * this.showExp);
            return console.log(`${this.fullName} salary: ${salaryWithExperience}`);
        }
        showSalaryForSort(){
            let showSalaryForSort = (this.dayRate * this.workingDays * this.showExp);
            return showSalaryForSort;
        }
    }

    let worker1 = new Worker("John Johnson", 20, 23);
    console.group("John Johnson");
    console.log(worker1.fullName);                 
    worker1.showSalary();
    console.log("New experience: " + worker1.showExp);
    worker1.showSalaryWithExperience();
    worker1.setExp = 1.5;
    console.log("New experience: " + worker1.showExp);
    worker1.showSalaryWithExperience();
    console.groupEnd('----------------------------')

    console.group("Tom Tomson");
    let worker2 = new Worker("Tom Tomson", 48, 22);
    console.log(worker2.fullName);                 
    worker2.showSalary();
    console.log("New experience: " + worker2.showExp);
    worker2.showSalaryWithExperience();
    worker2.setExp = 1.5;
    console.log("New experience: " + worker2.showExp);
    worker2.showSalaryWithExperience();
    console.groupEnd('----------------------------')

    console.group("Andy Ander");
    let worker3 = new Worker("Andy Ander", 29, 23);
    console.log(worker3.fullName);                 
    worker3.showSalary();
    console.log("New experience: " + worker3.showExp);
    worker3.showSalaryWithExperience();
    worker3.setExp = 1.5;
    console.log("New experience: " + worker3.showExp);
    worker3.showSalaryWithExperience();
    console.groupEnd('----------------------------')


    let arr = [ worker1 , worker2, worker3 ];

    function sortWorkers(a, b) {
        if (a.showSalaryForSort() > b.showSalaryForSort()){
            return 1;
        } else{
            return -1;
        }
    }

    console.group('Sorted salary:')
    arr.sort(sortWorkers);
    for (let k of arr) {
        console.log( `${k.fullName}:${k.showSalaryForSort()}`);
    }
    console.groupEnd('----------------------------')
*/