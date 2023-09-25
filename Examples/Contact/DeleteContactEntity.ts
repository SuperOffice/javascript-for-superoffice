import { RTL } from "../../Helpers/extensionMethods";
import { context } from "../../Helpers/logHelper";

//Variables
const contactId: number = 25;

const agent = new RTL.ContactAgent();
await agent.deleteContactEntityAsync(contactId);
context.result.body = 'ContactId '+ contactId.toString() + 'deleted'; 
