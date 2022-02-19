// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license === data.choices[0]) {
  return "[![MIT](https://img.shields.io/npm/l/express)](https://opensource.org/licenses/MIT)]"
  }
   else if (data.license === data.choices[1]) {
    return "[![Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
   }
   else if (data.license === data.choices[2]) {
    return "[![ECL-2.0](https://img.shields.io/badge/License-ECL--2.0-lightgrey.svg)](https://opensource.org/licenses/ECL-2.0)"
   }
   else if (data.license === data.choices[3]) {
     license = "[![Mozilla 2.0](https://img.shields.io/badge/license-Mozilla-red)](https://www.mozilla.org/en-US/MPL/2.0/)"
   }
  else if (data.license === data.default) {
    license =  ![None]("")
  }
  return license;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge}
  
  # Description
   ${data.description}

  ## Table Of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions?](#link)


  ## Installation
  ${data.installation}

  ## usage
  ${data.usage}

  ## License
  This file is licensed under ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions? Contact me:
  ${data.link}
  ${data.email}

  
`;
}


module.exports = generateMarkdown;
