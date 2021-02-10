npm install inquirer
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
inquirer.prompt([
    /* Pass your questions in here */
    type: "input"
    name: input => (input) "Please enter the Team Managers name"
     ID: get ID(input => Number.isInteger(Number(input)))  "Please enter the employee ID"
    Email: Getemail(input=> text) "Please enter employee email"
    Office Number input => Number.isInteger(Number(input)) "Please enter the office number"
  ])
  GetRole(Employee)
     
  });
  function addMember (answers) {
     return inquirer.prompt ({
          type: "list"
          Text: "Would you like to add an Engineer or Intern to finish building your team?"
          Choices: ["Add Engineer","Add Intern","Team is already completed"]
      }
      ])

      .then(function (prompt){
          console.log(prompt)
          if (prompt.role === "Engineer") {
              inquirer.prompt([
                  {
                      Type: "input"
                      Text: "What is the team members name?"
                      Text: "Please provide employee's ID, emaild and Github username"
                      
                  }
              ])
              .then(function (engineerPrompt) {
                var newEngineer = new Engineer(engineerRes.name, engineerRes.email, uniqueId, engineerRes.github);
                uniqueId = uniqueId + 1; 
                console.log(newEngineer);
                teamArray.push(newEngineer);
                addUser();
          }
      }) ;
     } else if (prompt.role === "Intern")
     inquirer.prompt([
        {
            Type: "input"
            Text: "What is the team members name?"
            Text: "Please provide employee's ID, emaild and Github username"
            
        }
    ])
    .then(function (InternPrompt) {
      var newIntern = new Intern(InternRes.name, InternRes.email, uniqueId, InternRes.github);
      uniqueId = uniqueId  + 1; 
      console.log(newIntern);
      teamArray.push(newIntern);
      addUser();
}
}) ;
  }
