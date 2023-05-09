const apacheLicense = require('./ApacheLicense');
const boostLicense = require('./boostLicense');
const bsdLicense = require('./bsdLicense');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    return `https://img.shields.io/badge/License-Apache_2.0-blue.svg`
  } else if (license === 'Boost') {
    return `https://img.shields.io/badge/License-Boost_1.0-lightblue.svg`
  } else if (license === 'BSD 2-Clause') {
    return `https://img.shields.io/badge/License-BSD_2--Clause-orange.svg`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache 2.0') {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license === 'Boost') {
    return `https://www.boost.org/LICENSE_1_0.txt`
  } else if (license === 'BSD 2-Clause') {
    return `https://opensource.org/licenses/BSD-2-Clause`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache 2.0') {
    return `${apacheLicense}`
  } else if (license === 'Boost') {
    return `${boostLicense}`
  } else if (license === 'BSD 2-Clause') {
    return `${bsdLicense}`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle} 
  ![${data.license}](${renderLicenseBadge(data.license)})

  ## Table of Contents

   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [Contributing](#contributing)
   - [Tests](#tests)
   - [License](#license)
   - [Resources](#resources)
   - [Contributors](#contributors)
   - [Questions?](#questions)

  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  
  This project is covered by the license below.

  ${renderLicenseSection(data.license)}

  For more information on this license go to: (${renderLicenseLink(data.license)})

  ## Resources
  1. ${data.resources}

  ## Contributors
  1. ${data.contributors}


  ## Questions?
  If you have any questions or concerns about this application please reach out to [${data.github}](https://github.com/${data.github}) or via email to ${data.email}.
 
`;
}

module.exports = generateMarkdown;
