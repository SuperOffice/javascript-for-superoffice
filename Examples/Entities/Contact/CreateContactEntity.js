
import * as RTL from '@superoffice/webapi';
import { context } from '../../../Helpers/logHelper';
    
//Variables
const name = "NewName";

const agent = new RTL.ContactAgent();
let entity = await agent.createDefaultContactEntityAsync();
entity.name = name;
entity = await agent.saveContactEntityAsync(entity);
context.result.body = JSON.stringify(entity);
