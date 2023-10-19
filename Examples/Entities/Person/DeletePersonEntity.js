import { RTL } from "../../../Helpers/extensionMethods";
import { context } from "../../../Helpers/logHelper";
//Variables
const entityId = 2;
const agent = new RTL.PersonAgent();
await agent.deletePersonEntityAsync(entityId);
context.result.body = 'EntityId ' + entityId.toString() + ' deleted';
