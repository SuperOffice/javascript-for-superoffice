
import { RTL } from "../../Helpers/extensionMethods";
import { context } from "../../Helpers/logHelper";
    
//Variables
const entityId: number = 2;

const agent = new RTL.TicketAgent();
await agent.deleteTicketEntityAsync(entityId);
context.result.body = 'EntityId ' + entityId.toString() + ' deleted';
