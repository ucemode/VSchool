function Employee (name, job, salary, status) {
    
    this.name = name;
    this.job = job;
    this.salary = salary;
    this.status = status;
}

var bob = new Employee("bob", "V School Instuctor", "$3000", "part-time");
    console.log(bob)