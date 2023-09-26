"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var entities = ['Contact', 'Person', 'Sale', 'Project'];
var generateClassForEntity = function (entity) { return "\nclass Extended".concat(entity, "Agent extends tsclientWebapi.").concat(entity, "Agent {\n    createDefault").concat(entity, "EntityAsync(): Promise<").concat(entity, "Entity> {\n        return this.CreateDefault").concat(entity, "Entity();\n    }\n    get").concat(entity, "EntityAsync(id: number): Promise<").concat(entity, "Entity> {\n        return this.Get").concat(entity, "Entity(id);\n    }\n    save").concat(entity, "EntityAsync(entity: ").concat(entity, "Entity): Promise<").concat(entity, "Entity> {\n        return this.Save").concat(entity, "Entity(entity);\n    }\n    delete").concat(entity, "EntityAsync(id: number): Promise<void> {\n        return this.Delete").concat(entity, "Entity(id);\n    }\n}\n"); };
var outputPath = path.resolve(__dirname, '..', 'Helpers', 'extensionMethods.ts');
var outputDirectory = path.dirname(outputPath);
// Ensure output directory exists
if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory, { recursive: true });
}
var outputCode = "\nimport * as tsclientWebapi from \"@superoffice/tsclient.webapi\";\nimport { ".concat(entities.map(function (e) { return "".concat(e, "Entity"); }).join(', '), " } from \"@superoffice/tsclient.webapi/dist/Carriers\";\n\n").concat(entities.map(generateClassForEntity).join('\n'), "\n\nconst ModifiedTsclientWebapi = {\n    ...tsclientWebapi,\n    ").concat(entities.map(function (entity) { return "".concat(entity, "Agent: Extended").concat(entity, "Agent"); }).join(',\n    '), "\n};\n\nexport const RTL = ModifiedTsclientWebapi;\n");
fs.writeFileSync(outputPath, outputCode);
console.log('extensionMethods.ts generated!');
