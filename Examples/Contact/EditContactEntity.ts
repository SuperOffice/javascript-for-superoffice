import { RTL } from "../../Helpers/extensionMethods";
import { context } from "../../Helpers/logHelper";

const agent = new RTL.ContactAgent();
let entity = await agent.getContactEntityAsync(2);
entity.Name = "EditedContactName";
entity = await agent.saveContactEntityAsync(entity);
context.result.body = JSON.stringify(entity);
