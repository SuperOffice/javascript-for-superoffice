
import * as RTL from '@superoffice/webapi';
import { context } from '../../../Helpers/logHelper';
    
//Variables
const entityId = 2;

const agent = new RTL.PersonAgent();
await agent.deletePersonEntityAsync(entityId);
context.result.body = 'EntityId ' + entityId.toString() + ' deleted';
