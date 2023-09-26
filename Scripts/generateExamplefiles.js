"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
function generateCreateEntityFile(entityConfig) {
    var importStatements = "\nimport { RTL } from \"../../Helpers/extensionMethods\";\nimport { context } from \"../../Helpers/logHelper\";";
    var variableDeclarations = entityConfig.attributes.map(function (attr) { return "const ".concat(attr.name, ": string = \"").concat(attr.value, "\";"); }).join('\n');
    var agentDeclaration = "const agent = new RTL.".concat(entityConfig.entityName, "Agent();");
    var entityCreation = "let entity = await agent.createDefault".concat(entityConfig.entityName, "EntityAsync();");
    var attributeAssignments = entityConfig.attributes.map(function (attr) { return "entity.".concat(attr.name, " = ").concat(attr.name, ";"); }).join('\n');
    var entitySave = "entity = await agent.save".concat(entityConfig.entityName, "EntityAsync(entity);");
    var resultAssignment = "context.result.body = JSON.stringify(entity);";
    var fileContent = "".concat(importStatements, "\n    \n//Variables\n").concat(variableDeclarations, "\n\n").concat(agentDeclaration, "\n").concat(entityCreation, "\n").concat(attributeAssignments, "\n").concat(entitySave, "\n").concat(resultAssignment, "\n");
    return fileContent;
}
function generateEditEntityFile(entityConfig) {
    var importStatements = "\nimport { RTL } from \"../../Helpers/extensionMethods\";\nimport { context } from \"../../Helpers/logHelper\";";
    var variableDeclarations = entityConfig.attributes.map(function (attr) { return "const ".concat(attr.name, ": string = \"").concat(attr.value, "\";"); }).join('\n');
    var entityIdDeclaration = "const entityId: number = 2;";
    var agentDeclaration = "const agent = new RTL.".concat(entityConfig.entityName, "Agent();");
    var entityGet = "let entity = await agent.get".concat(entityConfig.entityName, "EntityAsync(entityId);");
    var attributeAssignments = entityConfig.attributes.map(function (attr) { return "entity.".concat(attr.name, " = ").concat(attr.name, ";"); }).join('\n');
    var entitySave = "entity = await agent.save".concat(entityConfig.entityName, "EntityAsync(entity);");
    var resultAssignment = "context.result.body = JSON.stringify(entity);";
    var fileContent = "".concat(importStatements, "\n    \n//Variables\n").concat(variableDeclarations, "\n").concat(entityIdDeclaration, "\n\n").concat(agentDeclaration, "\n").concat(entityGet, "\n").concat(attributeAssignments, "\n").concat(entitySave, "\n").concat(resultAssignment, "\n");
    return fileContent;
}
function generateDeleteEntityFile(entityConfig) {
    var importStatements = "\nimport { RTL } from \"../../Helpers/extensionMethods\";\nimport { context } from \"../../Helpers/logHelper\";";
    var entityIdDeclaration = "const entityId: number = 2;";
    var agentDeclaration = "const agent = new RTL.".concat(entityConfig.entityName, "Agent();");
    var entityDelete = "await agent.delete".concat(entityConfig.entityName, "EntityAsync(entityId);");
    var resultAssignment = "context.result.body = 'EntityId ' + entityId.toString() + ' deleted';";
    var fileContent = "".concat(importStatements, "\n    \n//Variables\n").concat(entityIdDeclaration, "\n\n").concat(agentDeclaration, "\n").concat(entityDelete, "\n").concat(resultAssignment, "\n");
    return fileContent;
}
function saveToFile(filePath, content) {
    fs.writeFileSync(filePath, content);
}
function createEntityFolder(entityName) {
    var folderPath = path.join('Examples', entityName);
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
    return folderPath;
}
var entityConfigs = [
    {
        entityName: 'Contact',
        attributes: [
            { name: 'Name', value: 'NewName' },
            // Add more attributes as needed
        ],
    },
    {
        entityName: 'Person',
        attributes: [
            { name: 'Firstname', value: 'NewFirstname' },
            { name: 'Lastname', value: 'NewLastname' }
        ],
    },
    {
        entityName: 'Project',
        attributes: [
            { name: 'Name', value: 'NewName' }
        ],
    },
    {
        entityName: 'Ticket',
        attributes: [
            { name: 'Title', value: 'NewTitle' }
        ],
    },
    // Add more entity configurations as needed
];
entityConfigs.forEach(function (entityConfig) {
    var createFileContent = generateCreateEntityFile(entityConfig);
    var editFileContent = generateEditEntityFile(entityConfig);
    var deleteFileContent = generateDeleteEntityFile(entityConfig);
    var createFileName = "Create".concat(entityConfig.entityName, "Entity.ts");
    var editFileName = "Edit".concat(entityConfig.entityName, "Entity.ts");
    var deleteFileName = "Delete".concat(entityConfig.entityName, "Entity.ts");
    var folderPath = createEntityFolder(entityConfig.entityName);
    var createFilePath = path.join(folderPath, createFileName);
    var editFilePath = path.join(folderPath, editFileName);
    var deleteFilePath = path.join(folderPath, deleteFileName);
    saveToFile(createFilePath, createFileContent);
    saveToFile(editFilePath, editFileContent);
    saveToFile(deleteFilePath, deleteFileContent);
    console.log("Generated file: ".concat(createFilePath));
    console.log("Generated file: ".concat(editFilePath));
    console.log("Generated file: ".concat(deleteFilePath));
});