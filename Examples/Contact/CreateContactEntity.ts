import { RTL } from "../../Helpers/extensionMethods";
import { context } from "../../Helpers/logHelper";

//Variables
const newContactName: string = "ContactName";

const agent = new RTL.ContactAgent();
let entity = await agent.createDefaultContactEntityAsync();
entity.Name = newContactName;
entity = await agent.saveContactEntityAsync(entity);
context.result.body = JSON.stringify(entity);