const generateTeam = team => {


    const managerCard = manager => {
        return `
        <div class="employee-card">
            <h2 class="Manager">${manager.getName()}, Manager</h2>
            <div class="employee-info">
                <p>ID: ${manager.getId()}<p>
                <br>
                <p>Phone: ${manager.getNumber()}</p>
                <br>
                <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>}</p>
            </div>
        </div>
        `
    };

    const engineerCard = engineer => {
        return `
        <div class="employee-card">
            <h2 class="Engineer">${engineer.getName()}, Engineer</h2>
            <div class="employee-info">
                <p>ID: ${engineer.getId()}<p>
                <br>
                <p>Github<a href="https://github.com/${engineer.getGithub()}" target="_blank"></a></p>
                <br>
                <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>}</p>
            </div>
        </div>
        `
    };

    const internCard = intern => {
        return `
        <div class="employee-card">
            <h2 class="Intern">${intern.getName()}, Intern</h2>
            <div class="employee-info">
                <p>ID: ${intern.getId()}<p>
                <br>
                <p>Phone: ${intern.getNumber()}</p>
                <br>
                <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>}</p>
                <br>
                <p>${intern.getSchool()}<p>
            </div>
        </div>
        `
    };

    const teamArray = [];

    teamArray.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => managerCard(manager))
    );
    teamArray.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => engineerCard(engineer))
        .join("")
    );
    teamArray.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => internCard(intern))
        .join("")
    );
}

module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team Profile</title>
    <link rel="stylesheet" href="./style.css">

</head>

<body>
    <header>
        <div>
            <h1>Team Name</h1>
        </div>
    </header>
    <section class="container">
    ${generateTeam(team)}
    </section>
</body>

</html>
    
    `;
};