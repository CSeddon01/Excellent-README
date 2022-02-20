const licenseArray = ["MIT", "Apache 2.0", "ECL 2.0", "Mozilla"];
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === licenseArray[0]) {
    return "[![MIT](https://img.shields.io/npm/l/express)](https://opensource.org/licenses/MIT)";
  } else if (license === licenseArray[1]) {
    return "[![Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === licenseArray[2]) {
    return "[![ECL-2.0](https://img.shields.io/badge/License-ECL--2.0-lightgrey.svg)](https://opensource.org/licenses/ECL-2.0)";
  } else if (license === licenseArray[3]) {
    return "[![Mozilla 2.0](https://img.shields.io/badge/license-Mozilla-red)](https://www.mozilla.org/en-US/MPL/2.0/)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseArray[0]) {
    return "[MIT](https://opensource.org/licenses/MIT)";
  } else if (license === licenseArray[1]) {
    return "[Apache 2.0](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === licenseArray[2]) {
    return "[ECL-2.0](https://opensource.org/licenses/ECL-2.0)";
  } else if (license === licenseArray[3]) {
    return "[Mozilla 2.0](https://www.mozilla.org/en-US/MPL/2.0/)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === licenseArray[0]) {
    return `Click to learn more about ${licenseArray[0]}`;
  } else if (license === licenseArray[1]) {
    return `Click to learn more about ${licenseArray[1]}`;
  } else if (license === licenseArray[2]) {
    return `Click to learn more about ${licenseArray[2]}`;
  } else if (license === licenseArray[3]) {
    return `Click to learn more about ${licenseArray[3]}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # 🌟 ${data.title} 
  
  ## Badges

  ${renderLicenseBadge(data.license)}
  
  # ⚡ Description

   ${data.description}

  ## 👨‍💻 Table Of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions?](#link)


  ## 💬 Installation

  ${data.installation}

  ## 📄 Usage

  ${data.usage}

  ## License

 ${renderLicenseSection(data.license)}
 ${renderLicenseLink(data.license)}

  ## 🏆 Contributing

  ${data.contributing}

  ## 🧐 Tests

  ${data.tests}

  ## 📫 Questions? Contact me:

  ${data.link}

  ${data.email}

`;
}

module.exports = generateMarkdown;
