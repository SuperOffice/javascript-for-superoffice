import { RTL } from "../../Helpers/extensionMethods";
import { context } from "../../Helpers/logHelper";

const agent = new RTL.PersonAgent();
let entity = await agent.getPersonEntityAsync(2);
entity.Firstname = "EditedFirstname";
entity.Lastname = "EditedLastname";
entity = await agent.savePersonEntityAsync(entity);