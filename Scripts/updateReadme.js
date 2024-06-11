"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
function updateCodeBlock() {
    var readmePath = path.resolve(__dirname, '..', 'readme.md');
    // Read the README
    var readmeContent = fs.readFileSync(readmePath, 'utf-8');
    // Read the changed .ts-file
    var jsCodeContent = fs.readFileSync(path.resolve(__dirname, '..', 'Examples', 'Entities', 'Contact', 'CreateContactEntity.ts'), 'utf-8');
    var jsCodeBlock = "<!-- START:.ts -->\n```typescript\n".concat(jsCodeContent, "\n```\n<!-- END:.ts -->");
    // Filter out the lines with 'import'
    var jsCodeContentFiltered = jsCodeContent.split('\n')
        .filter(function (line) { return !line.trim().startsWith('import'); })
        .join('\n');
    var crmscriptCodeBlock = "<!-- START:.crmscript -->\n```typescript\n".concat(jsCodeContentFiltered, "\n```\n<!-- END:.crmscript -->");
    // Use regex to make all the patterns we need
    var tsPattern = new RegExp("<!-- START:.ts -->[\\s\\S]+?<!-- END:.ts -->");
    var crmscriptPattern = new RegExp("<!-- START:.crmscript -->[\\s\\S]+?<!-- END:.crmscript -->");
    var updatedReadmeContent = readmeContent.replace(tsPattern, jsCodeBlock).replace(crmscriptPattern, crmscriptCodeBlock);
    // Write the updated content back to the README
    fs.writeFileSync(readmePath, updatedReadmeContent);
}
updateCodeBlock();
