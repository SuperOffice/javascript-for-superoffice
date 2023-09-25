import * as fs from 'fs';
import * as path from 'path';

const mappings: { [key: string]: string } = {
    '../Examples/Contact/CreateContactEntity.ts': 'CreateContactEntity.ts',
    '../Examples/Contact/CreateContactEntity.js': 'CreateContactEntity.js',
    // ... add more mappings as needed
};

function updateCodeBlock(fileChanged: string): void {
    const blockIdentifier = mappings[fileChanged];
    if (!blockIdentifier) return;

    const codeFilePath = path.resolve(__dirname, fileChanged);
    const readmePath = path.resolve(__dirname, '..', 'readme.md');

    // Read the changing file
    const codeContent: string = fs.readFileSync(codeFilePath, 'utf-8');
    const newCodeBlock: string = `<!-- START:${blockIdentifier} -->\n\`\`\`typescript\n${codeContent}\n\`\`\`\n<!-- END:${blockIdentifier} -->`;

    // Read the README
    const readmeContent: string = fs.readFileSync(readmePath, 'utf-8');

    // Use regex to replace the existing code block with the new one
    const pattern = new RegExp(`<!-- START:${blockIdentifier} -->[\\s\\S]+?<!-- END:${blockIdentifier} -->`);
    const updatedReadmeContent: string = readmeContent.replace(pattern, newCodeBlock);

    // Write the updated content back to the README
    fs.writeFileSync(readmePath, updatedReadmeContent);
}

// Grab the filename from the command-line arguments
const fileChanged: string = process.argv[2];
if (fileChanged) {
    updateCodeBlock(fileChanged);
} else {
    console.log("Please provide the path to the file you changed.");
}
