const Intern = require("../lib/intern");

it("sets school from prompt", () => {
  const school = "University of Miami";
  const intern = new Intern("Jimmy", 4, "jimmy@uofm.com", school);
  expect(intern.school).toBe(school);
});

it("getRole == Intern", () => {
  const role = "Intern";
  const intern = new Intern("Jimmy", 4, "jimmy@uofm.com", "Univerity of Miami");
  expect(intern.getRole()).toBe(role);
});

it("getSchool == internSchool", () => {
  const school = "Univerity of Miami";
  const intern = new Intern("Jimmy", 4, "jimmy@uofm.com", school);
  expect(intern.getSchool()).toBe(school);
});