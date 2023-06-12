// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const licenseData = {
  "Apache License 2.0": {
    badge:"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    description:"This Application is licensed under the Apache License 2.0",
  },
  "GNU General Public License v3.0": {
    badge:"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    description:"This Application is licensed under the GNU GPL v3",
  },
  "MIT License": {
    badge:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    description:"This Application is licensed under the MIT License",
  },
  "none": {
    badge:"",
    description:"",
  },
    

}

function renderLicenseBadge(license) {
  return licenseData[license].badge
}


// Link Format: [Link text](link-url)
// [${username}](https://github.com/${username})
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Testing Instructions](#testing-instructions)
- [Licensing](#licensing)
- [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## Contributors
${data.contribution}

## Testing Instructions
${data.tests}

## Licensing
${licenseData[data.license].description}

## Questions
https://github.com/${data.github}
- If you have any questions you can reach me at ${data.email}
`;
}

module.exports = generateMarkdown;
