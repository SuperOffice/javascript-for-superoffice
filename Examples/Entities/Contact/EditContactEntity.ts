
import { RTL } from "../../../Helpers/extensionMethods";
import { context } from "../../../Helpers/logHelper";
    
//Variables
const Name: string = "NewName";
const entityId: number = 2;

const agent = new RTL.ContactAgent();
let entity = await agent.getContactEntityAsync(entityId);
entity.Name = Name;
entity = await agent.saveContactEntityAsync(entity);
context.result.body = JSON.stringify(entity);
