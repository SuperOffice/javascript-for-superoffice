
import { SO } from '../../../Helpers/webApiHelper';
import { context } from '../../../Helpers/logHelper';
    
//Variables
const name = "NewName";

const agent = SO.getContactAgent();
let entity = await agent.createDefaultContactEntityAsync();
entity.name = name;
entity = await agent.saveContactEntityAsync(entity);
context.result.body = JSON.stringify(entity);
