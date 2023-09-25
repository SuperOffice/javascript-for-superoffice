const fs = require('fs');

const entities = ['Contact', 'Person', 'Sale'];  // add more entities as needed

const generateClassForEntity = (entity) => `
class Extended${entity}Agent extends tsclientWebapi.${entity}Agent {
    createDefault${entity}EntityAsync() {
        return this.CreateDefault${entity}Entity();
    }
    get${entity}EntityAsync(id: number) {
        return this.Get${entity}Entity(id);
    }
    save${entity}EntityAsync(entity: any) {
        return this.Save${entity}Entity(entity);
    }
    delete${entity}EntityAsync(id: number) {
        return this.Delete${entity}Entity(id);
    }
}
`;

const outputCode = `
import * as tsclientWebapi from "@superoffice/tsclient.webapi";

${entities.map(generateClassForEntity).join('\n')}

export const RTL = {
    ${entities.map(entity => `${entity}Agent: Extended${entity}Agent`).join(',\n    ')}
};
`;

fs.writeFileSync('Helpers/extensionMethods.ts', outputCode);
console.log('extensionMethods.ts generated!');