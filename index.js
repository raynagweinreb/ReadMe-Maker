const inquirer = require('inquirer');
const fs = require('fs');
const generate = require("./generate.js");

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project Name?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is your project Description?',
      name: 'description',
    },
    {
        type: 'input',
        name: 'gitLink',
        message: 'Please enter your GitHub Profile Link:',
        validate: gitLinkInput => {
            if (gitLinkInput) {
                return true;
            } else {
                console.log('Please enter your GitHub Link!');
                return false;
            }
        }
    },

    {
        type: 'confirm',
        message: 'Do you want to have Installation in your table of contents?',
        name: 'installation',
    },
    {
        type:'input',
        message:'Please describe your installation process',
        name:"installationDescription",
        when: ({installation})=>{
            if (installation){
                return true
            } else 
                return false
        }

    },
    {
        type: 'confirm',
        message: 'Do you want to have Usage in your table of contents?',
        name: 'usage',
    },
    {
        type:'input',
        message:'Please describe your usage process',
        name:"usageDescription",
        when: ({usage})=>{
            if (usage){
                return true
            } else 
                return false
        }
    },
    {
        type: 'confirm',
        message: 'Do you want to have Credits in your table of contents?',
        name: 'credits',
    },
    {
        type:'input',
        message:'Please enter any credits you want',
        name:"creditsDescription",
        when: ({credits})=>{
            if (credits){
                return true
            } else 
            return false
    }

    },
    {
        type: 'confirm',
        name: 'licensing',
        message: 'Will your project be licensed?',
    },
    {
        type: 'list',
        name: 'licenseChoice',
        message: "Please select your license",
        choices: ['MIT', 'GNU', 'Apache', 'BSD', 'ISC'],
        when: ({licensing})=>{
            if (licensing){
                return true
            } else 
            return false
        }

    },
    {
        type: 'confirm',
        name: 'contribute',
        message: 'Will your project be open to contributions?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please explain your contribution guidlines for this project:',
        when: ({ contribute }) => {
            if (contribute) {
                return true
            } else {
                return false
            }
        }
    },
    {
    type: 'confirm',
    name: 'test',
    message: 'Will your project need testing instructions?',
    default: true
    },
    {
    type: 'input',
    name: 'testing',
    message: 'Please input testing instructions for the user:',
    when: ({ confirmTest }) => {
        if (confirmTest) {
            return true;
        } else {
            return false
        }
    }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email adress for people to contact you:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email adress!');
                return false;
            }
        }
    }
])
.then ((response) => {
    return generate(response);
})
.then((generate)=>{
console.log(generate)
    fs.writeFile('README.md',generate,(err)=>
    err ? console.error(err) : console.log("your README has been made!"));
})


                            
    