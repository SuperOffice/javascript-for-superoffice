import { RTL } from "../../Helpers/extensionMethods";
import { context } from "../../Helpers/logHelper";

//Variables
const newName: string = "NewName";

const agent = new RTL.ProjectAgent();
let entity = await agent.createDefaultProjectEntityAsync();
entity.Name = newName;
entity = await agent.saveProjectEntityAsync(entity);
context.result.body = JSON.stringify(entity);