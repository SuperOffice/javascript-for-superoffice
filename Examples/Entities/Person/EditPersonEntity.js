
import * as RTL from '@superoffice/webapi';
import { context } from '../../../Helpers/logHelper';
    
//Variables
const firstname = "NewFirstname";
const lastname = "NewLastname";
const entityId = 2;

const agent = new RTL.PersonAgent();
let entity = await agent.getPersonEntityAsync(entityId);
entity.firstname = firstname;
entity.lastname = lastname;
entity = await agent.savePersonEntityAsync(entity);
context.result.body = JSON.stringify(entity);
