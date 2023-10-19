"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
function updateCodeBlock() {
    var readmePath = path.resolve(__dirname, '..', 'readme.md');
    // Read the README
    var readmeContent = fs.readFileSync(readmePath, 'utf-8');
    // // Read the changed .ts-file
    // let tsCodeContent: string = fs.readFileSync(path.resolve(__dirname, '..', 'Examples', 'Contact', 'CreateContactEntity.ts'), 'utf-8');
    // const tsCodeBlock: string = `<!-- START:.ts -->\n\`\`\`typescript\n${tsCodeContent}\n\`\`\`\n<!-- END:.ts -->`;
    // Read the changed .js-file
    var jsCodeContent = fs.readFileSync(path.resolve(__dirname, '..', 'Examples', 'Entities', 'Contact', 'CreateContactEntity.js'), 'utf-8');
    var jsCodeBlock = "<!-- START:.js -->\n```javascript\n".concat(jsCodeContent, "\n```\n<!-- END:.js -->");
    // Filter out the lines with 'import'
    var jsCodeContentFiltered = jsCodeContent.split('\n')
        .filter(function (line) { return !line.trim().startsWith('import'); })
        .join('\n');
    var crmscriptCodeBlock = "<!-- START:.crmscript -->\n```javascript\n".concat(jsCodeContentFiltered, "\n```\n<!-- END:.crmscript -->");
    // Use regex to make all the patterns we need
    var tsPattern = new RegExp("<!-- START:.ts -->[\\s\\S]+?<!-- END:.ts -->");
    var jsPattern = new RegExp("<!-- START:.js -->[\\s\\S]+?<!-- END:.js -->");
    var crmscriptPattern = new RegExp("<!-- START:.crmscript -->[\\s\\S]+?<!-- END:.crmscript -->");
    var updatedReadmeContent = readmeContent.replace(jsPattern, jsCodeBlock).replace(crmscriptPattern, crmscriptCodeBlock);
    // Write the updated content back to the README
    fs.writeFileSync(readmePath, updatedReadmeContent);
}
updateCodeBlock();
