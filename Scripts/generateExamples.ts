import * as fs from 'fs';
import * as path from 'path';

interface EntityConfig {
    entityName: string;
    attributes: { name: string; value: string }[];
}


const rtlPath = "import { SO } from '../../../Helpers/webApiHelper';";
const contextPath = "import { context } from '../../../Helpers/logHelper';";
//import { SO } from '../../../Helpers/webApiHelper';

const importStatements = `
${rtlPath}
${contextPath}`;

function generateCreateEntityFile(entityConfig: EntityConfig): string {
    const variableDeclarations = entityConfig.attributes.map(attr => `const ${attr.name} = "${attr.value}";`).join('\n');

    const agentDeclaration = `const agent = SO.get${entityConfig.entityName}Agent();`;
    //const agentDeclaration = `const agent = new SO.${entityConfig.entityName}Agent();`;

    const entityCreation = `let entity = await agent.createDefault${entityConfig.entityName}EntityAsync();`;

    const attributeAssignments = entityConfig.attributes.map(attr => `entity.${attr.name} = ${attr.name};`).join('\n');

    const entitySave = `entity = await agent.save${entityConfig.entityName}EntityAsync(entity);`;

    const resultAssignment = `context.result.body = JSON.stringify(entity);`;

    const fileContent = `${importStatements}
    
//Variables
${variableDeclarations}

${agentDeclaration}
${entityCreation}
${attributeAssignments}
${entitySave}
${resultAssignment}
`;

    return fileContent;
}

function generateEditEntityFile(entityConfig: EntityConfig): string {
    const variableDeclarations = entityConfig.attributes.map(attr => `const ${attr.name} = "${attr.value}";`).join('\n');

    const entityIdDeclaration = `const entityId = 2;`;

    const agentDeclaration = `const agent = SO.get${entityConfig.entityName}Agent();`;
    //const agentDeclaration = `const agent = new RTL.${entityConfig.entityName}Agent();`;

    const entityGet = `let entity = await agent.get${entityConfig.entityName}EntityAsync(entityId);`;

    const attributeAssignments = entityConfig.attributes.map(attr => `entity.${attr.name} = ${attr.name};`).join('\n');

    const entitySave = `entity = await agent.save${entityConfig.entityName}EntityAsync(entity);`;

    const resultAssignment = `context.result.body = JSON.stringify(entity);`;

    const fileContent = `${importStatements}
    
//Variables
${variableDeclarations}
${entityIdDeclaration}

${agentDeclaration}
${entityGet}
${attributeAssignments}
${entitySave}
${resultAssignment}
`;

    return fileContent;
}

function generateDeleteEntityFile(entityConfig: EntityConfig): string {
    const entityIdDeclaration = `const entityId = 2;`;

    const agentDeclaration = `const agent = SO.get${entityConfig.entityName}Agent();`;
    //const agentDeclaration = `const agent = new RTL.${entityConfig.entityName}Agent();`;

    const entityDelete = `await agent.delete${entityConfig.entityName}EntityAsync(entityId);`;

    const resultAssignment = `context.result.body = 'EntityId ' + entityId.toString() + ' deleted';`;

    const fileContent = `${importStatements}
    
//Variables
${entityIdDeclaration}

${agentDeclaration}
${entityDelete}
${resultAssignment}
`;

    return fileContent;
}

function saveToFile(filePath: string, content: string) {
    fs.writeFileSync(filePath, content);
}

function createEntityFolder(entityName: string) {
    const folderPath = path.join('Examples', 'Entities', entityName);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
    return folderPath;
}

const entityConfigs: EntityConfig[] = [
    {
        entityName: 'Contact',
        attributes: [
            { name: 'name', value: 'NewName' },
            // Add more attributes as needed
        ],
    },
    {
        entityName: 'Person',
        attributes: [
            { name: 'firstname', value: 'NewFirstname' },
            { name: 'lastname', value: 'NewLastname' }
        ],
    },
    {
        entityName: 'Sale',
        attributes: [
            { name: 'heading', value: 'NewHeading' }
        ],
    },
    {
        entityName: 'Project',
        attributes: [
            { name: 'name', value: 'NewName' }
        ],
    },
    {
        entityName: 'Ticket',
        attributes: [
            { name: 'title', value: 'NewTitle' }
        ],
    },
    // Add more entity configurations as needed
];

entityConfigs.forEach(entityConfig => {
    const createFileContent = generateCreateEntityFile(entityConfig);
    const editFileContent = generateEditEntityFile(entityConfig);
    const deleteFileContent = generateDeleteEntityFile(entityConfig);

    const createFileName = `Create${entityConfig.entityName}Entity.ts`;
    const editFileName = `Edit${entityConfig.entityName}Entity.ts`;
    const deleteFileName = `Delete${entityConfig.entityName}Entity.ts`;

    const folderPath = createEntityFolder(entityConfig.entityName);

    const createFilePath = path.join(folderPath, createFileName);
    const editFilePath = path.join(folderPath, editFileName);
    const deleteFilePath = path.join(folderPath, deleteFileName);

    saveToFile(createFilePath, createFileContent);
    saveToFile(editFilePath, editFileContent);
    saveToFile(deleteFilePath, deleteFileContent);

    console.log(`Generated file: ${createFilePath}`);
    console.log(`Generated file: ${editFilePath}`);
    console.log(`Generated file: ${deleteFilePath}`);
});
