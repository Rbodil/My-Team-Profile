const Employee = require("../lib/Employee");

it("Can add employee", () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe("object");
});

it("Accepts Names", () => {
    const name = "Samantha";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

it("Retrieves names", () => {
    const name = "Geralt";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

it("Accepts Employee IDs", () => {
    const employeeId = 777;
    const employee = new Employee("Samantha", employeeId);
    expect(employee.id).toBe(employeeId);
});

it("Retrieves ID's", () => {
    const employeeId = 898;
    const employee = new Employee("Geralt", employeeId);
    expect(employee.getId()).toBe(employeeId);
});


it("Accepts Emails", () => {
    const email = "employee@gmail.com";
    const employee = new Employee("Foo", 1, email);
    expect(employee.email).toBe(email);
});

it("Retrieves emails", () => {
    const email = "email@gmail.com";
    const employee = new Employee("Geralt", 898, email);
    expect(employee.getEmail()).toBe(email);
});

it("Default Employee role", () => {
    const role = "Employee";
    const employee = new Employee("Geralt", 898, "email@gmail.com");
    expect(employee.getRole()).toBe(role);
});
