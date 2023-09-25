import { RTL } from "../../Helpers/extensionMethods";
import { context } from "../../Helpers/logHelper";

const agent = new RTL.PersonAgent();
let entity = await agent.createDefaultPersonEntityAsync();
entity.Firstname = "NewFirstname";
entity.Lastname = "NewLastname";
entity = await agent.savePersonEntityAsync(entity);
context.result.body = JSON.stringify(entity);