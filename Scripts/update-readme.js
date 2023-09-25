"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var mappings = {
    '../Examples/Contact/CreateContactEntity.ts': 'CreateContactEntity.ts',
    '../Examples/Contact/CreateContactEntity.js': 'CreateContactEntity.js',
    // ... add more mappings as needed
};
function updateCodeBlock(fileChanged) {
    var blockIdentifier = mappings[fileChanged];
    if (!blockIdentifier)
        return;
    var codeFilePath = path.resolve(__dirname, fileChanged);
    var readmePath = path.resolve(__dirname, '..', 'readme.md');
    // Read the changing file
    var codeContent = fs.readFileSync(codeFilePath, 'utf-8');
    var newCodeBlock = "<!-- START:".concat(blockIdentifier, " -->\n```typescript\n").concat(codeContent, "\n```\n<!-- END:").concat(blockIdentifier, " -->");
    // Read the README
    var readmeContent = fs.readFileSync(readmePath, 'utf-8');
    // Use regex to replace the existing code block with the new one
    var pattern = new RegExp("<!-- START:".concat(blockIdentifier, " -->[\\s\\S]+?<!-- END:").concat(blockIdentifier, " -->"));
    var updatedReadmeContent = readmeContent.replace(pattern, newCodeBlock);
    // Write the updated content back to the README
    fs.writeFileSync(readmePath, updatedReadmeContent);
}
// Grab the filename from the command-line arguments
var fileChanged = process.argv[2];
if (fileChanged) {
    updateCodeBlock(fileChanged);
}
else {
    console.log("Please provide the path to the file you changed.");
}
