const Engineer = require("../lib/engineer");

it("sets Github", () => {
    const github = "github@github";
    const engineer = new Engineer("Johny", 2395, "coolguy@developer.com", github);
    expect(engineer.github).toBe(github);
});

it("getRole() should return 'Engineer'", () => {
    const role = "Engineer";
    const engineer = new Engineer("Johny", 2395, "coolguy@developer.com", "github@github");
    expect(engineer.getRole()).toBe(role);
});

it("Can get GitHub username via getGithub()", () => {
    const github = "github@github";
    const engineer = new Engineer("Johny", 2395, "coolguy@developer.com", github);
    expect(engineer.getGithub()).toBe(github);
});