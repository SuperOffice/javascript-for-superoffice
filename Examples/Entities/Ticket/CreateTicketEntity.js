
import * as RTL from '@superoffice/webapi';
import { context } from '../../../Helpers/logHelper';
    
//Variables
const title = "NewTitle";

const agent = new RTL.TicketAgent();
let entity = await agent.createDefaultTicketEntityAsync();
entity.title = title;
entity = await agent.saveTicketEntityAsync(entity);
context.result.body = JSON.stringify(entity);
