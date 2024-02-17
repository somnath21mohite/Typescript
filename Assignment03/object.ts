console.log(`<=========================== STEP 1 =============================>`);

const Employee = {
  empId: 44,
  empName: "Somnath Mohite",
  empDesignation: "Software Engineer",
  empRole: "developer",
  empAge: 31,
  empCompany: "TCS",
  empSalary: 100000,
};

var { empId, empName, empRole, empCompany, empAge } = Employee;
console.log(`De-structuring Using For-in Loop`);
console.log("");

for (const key in Employee) {
  if (Object.prototype.hasOwnProperty.call(Employee, key)) {
    const element = (Employee as any)[key];
    console.log(`${key}: ${element}`);
  }
}

console.log(`<=========================== STEP 2 =============================>`);

let vaccination: string[] = ["J & J", "Pfizer", "Sputnik"];
console.log(`Original Array: ${vaccination}`);

vaccination.push("Covaxin");
console.log(`After Add New Vaccin: ${vaccination}`);

console.log(`De-structuring Using For-of Loop`);

var [first, second, third, forth] = vaccination;
for (const element of vaccination) {
  console.log(element);
}