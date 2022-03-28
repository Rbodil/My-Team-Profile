const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

it("sets office phone number from prompt", () => {
  const number = 12;
  const manager = new Manager("Jenn", 1738, "manager@gmail.com", number);
  expect(manager.number).toBe(number);
});

it("role == Manager", () => {
  const role = "Manager";
  const manager = new Manager("Jenn", 1738, "manager@gmail.com", 12);
  expect(manager.getRole()).toBe(role);
});

it("getNumber == managerNumber", () => {
  const number = 12;
  const manager = new Manager("Jenn", 1738, "manager@gmail.com", number);
  expect(manager.getNumber()).toBe(number);
});