
import { SO } from '../../../Helpers/webApiHelper';
import { context } from '../../../Helpers/logHelper';
    
//Variables
const entityId = 2;

const agent = SO.getPersonAgent();
await agent.deletePersonEntityAsync(entityId);
context.result.body = 'EntityId ' + entityId.toString() + ' deleted';
