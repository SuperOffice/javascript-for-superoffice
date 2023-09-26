import { RTL } from "../../Helpers/extensionMethods";
import { context } from "../../Helpers/logHelper";

//Variables
const newName: string = "NewName";

const agent = new RTL.TicketAgent();
let entity = await agent.createDefaultTicketEntityAsync();
entity.Title = newName;
entity = await agent.saveTicketEntityAsync(entity);
context.result.body = JSON.stringify(entity);