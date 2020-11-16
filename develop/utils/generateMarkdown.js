// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Description
  ${data.Description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributors](#Contribution)
  * [Testing](#Testing)
  * [Licenses](#Licenses)
  * [Questions](#)

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Contributors
  ${data.Contribution}

  ## Testing
  ${data.Testing}

  ## Licenses
  ${data.Licenses}

  ## Questions
  * <https://github.com/${data.Github}>
  * <${data.Email}>`;
}

module.exports = generateMarkdown;
