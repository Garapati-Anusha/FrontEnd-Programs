function Employee(firstName, lastName, id, role) {
    this.firstName = firstName; 
    this.lastName = lastName;
    this.id = id;
    this.role = role;
    this.changeRole = function (role) {
      this.role = role;
    };
  }

const employee1 = new Employee("John", "Doe", 1, "Developer");
const employee2 = new Employee("Mary", "Williams", 1, "Analyst");

employee1.skill = "React JS";
document.getElementById("demo1").innerHTML = JSON.stringify(employee1);
document.getElementById("demo2").innerHTML = JSON.stringify(employee2);

employee2.changeRole("Data Analyst");
document.getElementById("demo3").innerHTML = JSON.stringify(employee2);

Employee.prototype.nationality = "Indian";
document.getElementById("demo4").innerHTML = employee1.nationality;

