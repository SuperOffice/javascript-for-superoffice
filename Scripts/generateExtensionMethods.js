var fs = require('fs');
var entities = ['Contact', 'Person', 'Sale']; // add more entities as needed
var generateClassForEntity = function (entity) { return "\nclass Extended".concat(entity, "Agent extends tsclientWebapi.").concat(entity, "Agent {\n    createDefault").concat(entity, "EntityAsync() {\n        return this.CreateDefault").concat(entity, "Entity();\n    }\n    get").concat(entity, "EntityAsync(id: number) {\n        return this.Get").concat(entity, "Entity(id);\n    }\n    save").concat(entity, "EntityAsync(entity: any) {\n        return this.Save").concat(entity, "Entity(entity);\n    }\n    delete").concat(entity, "EntityAsync(id: number) {\n        return this.Delete").concat(entity, "Entity(id);\n    }\n}\n"); };
var outputCode = "\nimport * as tsclientWebapi from \"@superoffice/tsclient.webapi\";\n\n".concat(entities.map(generateClassForEntity).join('\n'), "\n\nexport const RTL = {\n    ").concat(entities.map(function (entity) { return "".concat(entity, "Agent: Extended").concat(entity, "Agent"); }).join(',\n    '), "\n};\n");
fs.writeFileSync('Helpers/extensionMethods.ts', outputCode);
console.log('extensionMethods.ts generated!');
