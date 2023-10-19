import * as RTL from '@superoffice/webapi';
import { context } from '../../../Helpers/logHelper';
    
//Variables
const heading = "NewHeading";

const agent = new RTL.SaleAgent();
let entity = await agent.createDefaultSaleEntityAsync();
entity.heading = heading;
entity = await agent.saveSaleEntityAsync(entity);
context.result.body = JSON.stringify(entity);
