import * as RTL from '@superoffice/webapi';
import { context } from '../../../Helpers/logHelper';
    
//Variables
const entityId = 2;

const agent = new RTL.SaleAgent();
await agent.deleteSaleEntityAsync(entityId);
context.result.body = 'EntityId ' + entityId.toString() + ' deleted';
