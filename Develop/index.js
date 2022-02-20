const inquirer = require("inquirer");
const fs = require("fs");
const fsPromises = fs.promises
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  // Title of project to be displayed at the top
  {
    type: "input",
    name: "title",
    message: "What is the name of your project? (Required)",
    validate: (projectTitle) => {
      if (projectTitle) {
        return true;
      } else {
        console.log(
          "Please enter the name of your project's title. (Required)"
        );
        return false;
      }
    },
  },
  // Licenses displayed as badges near top
  {
    type: "list",
    name: "license",
    message: "What license would you like to put on your program?",
    choices: ["MIT", "Apache 2.0", "ECL 2.0", "Mozilla"],
    default: ["None"],
  },

  {
    type: "input",
    name: "description",
    message:
      "Provide a short description explaining the what, why, and how of your project. (Required)?",
    validate: (projectDescription) => {
      if (projectDescription) {
        return true;
      } else {
        console.log(
          "Provide a short description explaining the what, why, and how of your project."
        );
        return false;
      }
    },
  },
  // Start of sections of the README entitled Description, Installation, Usage, Contributing, and Tests
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
    default: ["None"],
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use.",
    default: ["None"],
  },
  {
    type: "input",
    name: "contributing",
    message:
      "List your collaborators, if any, with links to their GitHub profiles.",
    default: ["None"],
  },
  {
    type: "input",
    name: "tests",
    message: "Provide exmaples of tests and how to run them here.",
    default: ["None"],
  },
  // End Section
  // Start of Question section
  {
    type: "input",
    name: "link",
    message: "What is your Github username? (Required)",
    validate: (linkInput) => {
      if (linkInput) {
        return true;
      } else {
        console.log("What is your Github username?");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your contact email address? (Required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Enter contact email address.");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fsPromises.writeFile(fileName, data, 
    (err) => {err ? console.error(err) : console.log("Created File.");
  });
}

// TODO: Create a function to initialize app
async function init(prompt) {
  try {
    const answers = await inquirer.prompt(prompt);
    console.log("Gathered response.");
    let generateMD = await generateMarkdown(answers);
    console.log("Generating README file...");
    writeToFile("./dist/README.md", generateMD);
   } finally { console.log("Your README file has been generated.");
}}
// Function call to initialize app
init(questions);
