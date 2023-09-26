
import { RTL } from "../../Helpers/extensionMethods";
import { context } from "../../Helpers/logHelper";
    
//Variables
const Title: string = "NewTitle";
const entityId: number = 2;

const agent = new RTL.TicketAgent();
let entity = await agent.getTicketEntityAsync(entityId);
entity.Title = Title;
entity = await agent.saveTicketEntityAsync(entity);
context.result.body = JSON.stringify(entity);
