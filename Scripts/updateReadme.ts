import * as fs from 'fs';
import * as path from 'path';

function updateCodeBlock(): void {

    const readmePath = path.resolve(__dirname, '..', 'readme.md');

    // Read the README
    const readmeContent: string = fs.readFileSync(readmePath, 'utf-8');
   
    // Read the changed .ts-file
    let jsCodeContent: string = fs.readFileSync(path.resolve(__dirname, '..', 'Examples', 'Entities', 'Contact', 'CreateContactEntity.ts'), 'utf-8');
    const jsCodeBlock: string = `<!-- START:.ts -->\n\`\`\`typescript\n${jsCodeContent}\n\`\`\`\n<!-- END:.ts -->`;
    
    // Filter out the lines with 'import'
    const jsCodeContentFiltered = jsCodeContent.split('\n')
                                            .filter(line => !line.trim().startsWith('import'))
                                            .join('\n');
    const crmscriptCodeBlock: string = `<!-- START:.crmscript -->\n\`\`\`typescript\n${jsCodeContentFiltered}\n\`\`\`\n<!-- END:.crmscript -->`;

    // Use regex to make all the patterns we need
    const tsPattern = new RegExp(`<!-- START:.ts -->[\\s\\S]+?<!-- END:.ts -->`);
    const crmscriptPattern = new RegExp(`<!-- START:.crmscript -->[\\s\\S]+?<!-- END:.crmscript -->`);

    const updatedReadmeContent: string = readmeContent.replace(tsPattern, jsCodeBlock).replace(crmscriptPattern, crmscriptCodeBlock); 
    
    // Write the updated content back to the README
    fs.writeFileSync(readmePath, updatedReadmeContent);
}

updateCodeBlock();
