import { RTL } from "../../Helpers/extensionMethods";
import { context } from "../../Helpers/logHelper";

//Variables
const newFirstname: string = "EditedFirstname";
const newLastname: string = "EditedLastname";
const entityId: number = 2;

const agent = new RTL.PersonAgent();
let entity = await agent.getPersonEntityAsync(entityId);
entity.Firstname = newFirstname;
entity.Lastname = newLastname;
entity = await agent.savePersonEntityAsync(entity);
context.result.body = JSON.stringify(entity);