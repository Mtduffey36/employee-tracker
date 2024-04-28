const addEmployeesBtn = document.querySelector('#add-employees-btn');
addEmployeesBtn.addEventListener('click', promptMe);

const collectEmployees = function() {
  let employees = [];
  let cancel = true;
  while (cancel) {
    let firstName = prompt("Enter First Name:");
    let lastName = prompt("Enter Last Name");
    let salary = Number(prompt("Enter Desired Salary"));
    employees.push({firstName:firstName, lastName:lastName, salary:salary});
    cancel = confirm("OK to continue? Or Cancel?");
  } 
  return employees;
}

function promptMe() {
 
}

function displayAverageSalary(employees) {
  sum = 0
  for(i = 0; i < employees.length; i++) {
    sum += employees[i].salary;
  }
  average = sum / employees.length;
  let roundedAverage = Math.round((average + Number.EPSILON) * 100) / 100
  console.log(`Average Salary Equals ${roundedAverage} and the number of employees is ${employees.length}`);
}

console.log("==========================================================================")

const getRandomEmployee = function(employees) {
  let random = Math.floor(Math.random(employees) * employees.length);
  const randomEmployee = employees[random];
  const fullName = (`${randomEmployee .firstName}${randomEmployee.lastName}`)
  console.log(`Congratulations to ${fullName} our random employee winner! `);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);