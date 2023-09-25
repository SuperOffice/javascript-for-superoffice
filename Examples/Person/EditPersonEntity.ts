import { RTL } from "../../Helpers/extensionMethods";
import { context } from "../../Helpers/logHelper";

//Variables
const newFirstname: string = "EditedFirstname";
const newLastname: string = "EditedLastname";

const agent = new RTL.PersonAgent();
let entity = await agent.getPersonEntityAsync(2);
entity.Firstname = newFirstname;
entity.Lastname = newLastname;
entity = await agent.savePersonEntityAsync(entity);
context.result.body = JSON.stringify(entity);