import * as fs from 'fs';
import * as path from 'path';

const entities: string[] = ['Contact', 'Person', 'Sale', 'Project', 'Ticket'];

const generateClassForEntity = (entity: string): string => `
class Extended${entity}Agent extends tsclientWebapi.${entity}Agent {
    createDefault${entity}EntityAsync(): Promise<${entity}Entity> {
        return this.CreateDefault${entity}Entity();
    }
    get${entity}EntityAsync(id: number): Promise<${entity}Entity> {
        return this.Get${entity}Entity(id);
    }
    save${entity}EntityAsync(entity: ${entity}Entity): Promise<${entity}Entity> {
        return this.Save${entity}Entity(entity);
    }
    delete${entity}EntityAsync(id: number): Promise<void> {
        return this.Delete${entity}Entity(id);
    }
}
`;


const generateImportStatements = (): string => {
    return `import { ${entities.map(e => `${e}Entity`).join(', ')} } from "@superoffice/tsclient.webapi/dist/Carriers";`;
};

const generateExport = (): string => `
export const RTL = {
    ${entities.map(entity => `${entity}Agent: Extended${entity}Agent`).join(',\n    ')}
};
`;

const outputPath = path.resolve(__dirname, '..', 'Helpers', 'extensionMethods.ts');
const outputDirectory = path.dirname(outputPath);

// Ensure output directory exists
if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
}

const outputCode = `
import * as tsclientWebapi from "@superoffice/tsclient.webapi";
${generateImportStatements()}

${entities.map(generateClassForEntity).join('\n')}
${generateExport()}
`;

fs.writeFileSync(outputPath, outputCode);
console.log('extensionMethods.ts generated!');
