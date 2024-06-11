
import { SO } from '../../../Helpers/webApiHelper';
import { context } from '../../../Helpers/logHelper';
    
//Variables
const firstname = "NewFirstname";
const lastname = "NewLastname";
const entityId = 2;

const agent = SO.getPersonAgent();
let entity = await agent.getPersonEntityAsync(entityId);
entity.firstname = firstname;
entity.lastname = lastname;
entity = await agent.savePersonEntityAsync(entity);
context.result.body = JSON.stringify(entity);
