import { RTL } from "../../Helpers/extensionMethods";
import { context } from "../../Helpers/logHelper";

//Variables
const newFirstname: string = "NewFirstname";
const newLastname: string = "NewLastname";

const agent = new RTL.PersonAgent();
let entity = await agent.createDefaultPersonEntityAsync();
entity.Firstname = newFirstname;
entity.Lastname = newLastname;
entity = await agent.savePersonEntityAsync(entity);
context.result.body = JSON.stringify(entity);