import { RTL } from "../../../Helpers/extensionMethods";
import { context } from "../../../Helpers/logHelper";
//Variables
const entityId = 2;
const agent = new RTL.ContactAgent();
await agent.deleteContactEntityAsync(entityId);
context.result.body = 'EntityId ' + entityId.toString() + 'deleted';
