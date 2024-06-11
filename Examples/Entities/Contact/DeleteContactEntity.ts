
import { SO } from '../../../Helpers/webApiHelper';
import { context } from '../../../Helpers/logHelper';
    
//Variables
const entityId = 2;

const agent = SO.getContactAgent();
await agent.deleteContactEntityAsync(entityId);
context.result.body = 'EntityId ' + entityId.toString() + ' deleted';
