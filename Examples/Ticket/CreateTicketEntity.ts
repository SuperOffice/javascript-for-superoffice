
import { RTL } from "../../Helpers/extensionMethods";
import { context } from "../../Helpers/logHelper";
    
//Variables
const Title: string = "NewTitle";

const agent = new RTL.TicketAgent();
let entity = await agent.createDefaultTicketEntityAsync();
entity.Title = Title;
entity = await agent.saveTicketEntityAsync(entity);
context.result.body = JSON.stringify(entity);
