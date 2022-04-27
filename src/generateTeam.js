const generateTeam = (team) => {
  // create manager html
  const generateManager = (manager) => {
    return `
        
        <div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h3 class="card-header">${manager.getName()}</h4>
        <h4 class="card-header">${manager.getRole()}&emsp;<i class="fa-solid fa-user-tie"></i></h3>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email Address: <a href= "mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Phone: ${manager.getOfficeNumber()}</li>
        </ul>
        </div>
    </div>
        `;
  };

  // create engineer html
  const generateEngineer = (engineer) => {
    return ` 
        
        <div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h3 class="card-header">${engineer.getName()}</h3>
        <h4 class="card-header">${engineer.getRole()}&emsp;<i class="fa-solid fa-laptop-code"></i></h4>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${engineer.getId()}</li>
            <li class="list-group-item">Email Address: <a href= "mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub:<a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
        </ul>
        </div>
</div>
        `;
  };

  // create intern html
  const generateIntern = (intern) => {
    return `
        <div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <h3 class="card-header">${intern.getName()}</h3>
        <h4 class="card-header">${intern.getRole()}&emsp;<i class="fa-solid fa-user-graduate"></i></h4>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID:${intern.getId()}</li>
            <li class="list-group-item">Email Address: <a href= "mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">${intern.getSchool()}</li>
        </ul>
        </div>
</div>
        `;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return html.join("");
};

// export function to generate entire page
module.exports = (team) => {
  return `
    
  <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
    integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">  
    <script src="https://kit.fontawesome.com/0748df40c4.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="./style.css">        
    <title>Team Profile</title>
    
    </head>
    <body>
    <div class="Jumbotron Jumbotron-fluid">
    <div class="row">
        <div class="col-12 jumbotron team-heading">
            <h1 class="text-center">Team Initech</h1>
        </div>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="row team-area col-12 justify-content-center">
                ${generateTeam(team)}
           
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</body>
</html>
    `;
};
