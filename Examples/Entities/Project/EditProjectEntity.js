import * as RTL from '@superoffice/webapi';
import { context } from '../../../Helpers/logHelper';
    
//Variables
const name = "NewName";
const entityId = 2;

const agent = new RTL.ProjectAgent();
let entity = await agent.getProjectEntityAsync(entityId);
entity.name = name;
entity = await agent.saveProjectEntityAsync(entity);
context.result.body = JSON.stringify(entity);
