
import { RTL } from "../../../Helpers/extensionMethods";
import { context } from "../../../Helpers/logHelper";
    
//Variables
const Name: string = "NewName";

const agent = new RTL.ProjectAgent();
let entity = await agent.createDefaultProjectEntityAsync();
entity.Name = Name;
entity = await agent.saveProjectEntityAsync(entity);
context.result.body = JSON.stringify(entity);
