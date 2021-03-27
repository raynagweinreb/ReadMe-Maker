const getInstall = installText => {
    if (!installText) {
        return ""
    } else {
        return `##Installation
        ${installText}`
    }
        
    
    }
const getUsage = usageDescriptionText => {
    if (!usageDescriptionText){
        return ""
    } else {
        return`##Usage
        ${usageDescriptionText}`
    }
}
const getContribution = contributionText => {
    if (!contributionText){
        return""
    } else{
        return `## Contributions 
        ${contributionText}`
    }
    }
const getCredits = creditsDescriptionText => {
    if (!creditsDescriptionText){
        return""
    } else{
        return `## credits
        ${creditsDescriptionText}`
    }
}
const getLicensing = licenseChoice => {
    if (!licenseChoice){
        return""
    } else{
        return `## License
        ${licenseChoice}`
    }
}
const getTesting = testingText => {
    if (!testingText){
        return ""
    } else {
        return `## Testing
        ${testingText}`

    }
    }

const checkInstall = check => {
    if (!check){
        return "";
    } else {
        return `* [installation](#installation)`
    }
    }
const checkUsage = check => {
    if (!check){
        return "";
    } else {
        return `* [Usage](#Usage)`
    }
    }
const checkContribution = check => {
    if (!check){
        return "";
    } else {
        return `* [Contribution](#Contribution)`
    }
    }
const checkCredits = check => {
    if (!check){
        return "";
    } else {
        return `* [Credits](#Credits)`
    }
    }
const checkLicense = check => {
    if (!check){
        return "";
    } else {
        return `* [License](#License)`
    }
    }
const checkTesting = check => {
    if (!check){
        return "";
    } else {
        return `* [Testing](#Testing)`
    }
    }
    
function generate(response){
    return `
# ${response.title}
## Description
${response.description}
## Table of Contents
${checkInstall(response.installation)}
${checkUsage(response.usage)}
${checkCredits(response.credits)}
${checkLicense(response.licensing)}
${checkContribution(response.contribute)}
${checkTesting(response.test)}
* [Questions](#questions)
    
${getInstall(response.install)}

${getUsage(response.usageDescription)}

${getCredits(response.creditsDescription)}
    
${getLicensing(response.licenseChoice)}
${getContribution(response.contribution)}
${getTesting(response.testing)}
## Questions
This application was created by ${response.gitlink}
Please direct any questions to ${response.email}`
}
module.exports = generate