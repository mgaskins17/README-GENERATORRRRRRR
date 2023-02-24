// index.js file which will control the main functionality of the read me generator.
const inquirer = require('inquirer');
const fs = require('fs');
answers = [];

const license = [
    {
        name: 'GNU AGPLv3',
        description: 'Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.',
        badge: 'https://img.shields.io/badge/License-AGPL_v3-blue.svg'
    },
    {
        name: 'GNU LGPLv3',
        description: 'Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.',
        badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg'
    },
    {
        name: 'Mozilla Public License 2.0',
        description: 'Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.',
        badge: 'https://opensource.org/licenses/MPL-2.0'
    },
    {
        name: 'Apache License 2.0',
        description: 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.',
        badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
    },
    {
        name: 'MIT License',
        description: 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.',
        badge: 'https://img.shields.io/badge/License-MIT-yellow.svg'
    },
    {
        name: 'Boost Software License 1.0',
        description: 'A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.',
        badge: 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg'
    },
    {
        name: 'The Unlicense',
        description: 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.',
        badge: 'https://img.shields.io/badge/license-Unlicense-blue.svg'
    }
];

const readTemp = (data, license) => {
    return (
`# <${data.project}>
![${license.name}] ${license.badge})
## Description

${data.description}

# Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#how-to-contribute)
- [Test](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}


## License

This software developed by ${data.github} falls under the ${data.licenses}.

${license.description}
    
## How to Contribute
    
${data.contribution}
    
## Tests
    
${data.tests}

## Questions

GITHUB: https://github.com/${data.github}
Email: ${data.email};`)
};


inquirer
 .prompt([
    {
        type: 'input', 
        message: 'What is the name of the project?',
        name: 'project'
    },
    {
        type: 'input',
        message: 'Please provide a description of the project: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please provide installation instructions for the project: ',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please provide instructions for usage of the project: ',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please provide how the user can contribute to the project: ',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Please provide tests the user can simulate for the project: ',
        name: 'tests'
    },
    {
        type: 'list',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache Lilcense 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'licenses'
    },
    {
        type: 'input',
        message: 'Please input your github username: ',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Please input your email address: ',
        name: 'email'
    }
 ])
 .then((data) => {
    console.log(data);
    const temp = license.find(item => item.name === data.licenses)
    return readTemp(data, temp)
 })
 .then((data) => {
    fs.writeFile('README.md', data, err => {
       err ? console.error(err) : console.log('ReadMe successfully written!') 
    })
 })




 





    
