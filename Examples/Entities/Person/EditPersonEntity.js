import { RTL } from "../../../Helpers/extensionMethods";
import { context } from "../../../Helpers/logHelper";
//Variables
const Firstname = "NewFirstname";
const Lastname = "NewLastname";
const entityId = 2;
const agent = new RTL.PersonAgent();
let entity = await agent.getPersonEntityAsync(entityId);
entity.Firstname = Firstname;
entity.Lastname = Lastname;
entity = await agent.savePersonEntityAsync(entity);
context.result.body = JSON.stringify(entity);
