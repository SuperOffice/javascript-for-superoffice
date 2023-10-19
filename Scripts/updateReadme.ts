import * as fs from 'fs';
import * as path from 'path';

function updateCodeBlock(): void {

    const readmePath = path.resolve(__dirname, '..', 'readme.md');

    // Read the README
    const readmeContent: string = fs.readFileSync(readmePath, 'utf-8');

    // // Read the changed .ts-file
    // let tsCodeContent: string = fs.readFileSync(path.resolve(__dirname, '..', 'Examples', 'Contact', 'CreateContactEntity.ts'), 'utf-8');
    // const tsCodeBlock: string = `<!-- START:.ts -->\n\`\`\`typescript\n${tsCodeContent}\n\`\`\`\n<!-- END:.ts -->`;
    
    // Read the changed .js-file
    let jsCodeContent: string = fs.readFileSync(path.resolve(__dirname, '..', 'Examples', 'Entities', 'Contact', 'CreateContactEntity.js'), 'utf-8');
    const jsCodeBlock: string = `<!-- START:.js -->\n\`\`\`javascript\n${jsCodeContent}\n\`\`\`\n<!-- END:.js -->`;
    
    // Filter out the lines with 'import'
    const jsCodeContentFiltered = jsCodeContent.split('\n')
                                            .filter(line => !line.trim().startsWith('import'))
                                            .join('\n');
    const crmscriptCodeBlock: string = `<!-- START:.crmscript -->\n\`\`\`javascript\n${jsCodeContentFiltered}\n\`\`\`\n<!-- END:.crmscript -->`;

    // Use regex to make all the patterns we need
    const tsPattern = new RegExp(`<!-- START:.ts -->[\\s\\S]+?<!-- END:.ts -->`);
    const jsPattern = new RegExp(`<!-- START:.js -->[\\s\\S]+?<!-- END:.js -->`);
    const crmscriptPattern = new RegExp(`<!-- START:.crmscript -->[\\s\\S]+?<!-- END:.crmscript -->`);

    const updatedReadmeContent: string = readmeContent.replace(jsPattern, jsCodeBlock).replace(crmscriptPattern, crmscriptCodeBlock); 
    
    // Write the updated content back to the README
    fs.writeFileSync(readmePath, updatedReadmeContent);
}

updateCodeBlock();
