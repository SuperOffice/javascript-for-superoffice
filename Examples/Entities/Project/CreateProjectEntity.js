import * as RTL from '@superoffice/webapi';
import { context } from '../../../Helpers/logHelper';
    
//Variables
const name = "NewName";

const agent = new RTL.ProjectAgent();
let entity = await agent.createDefaultProjectEntityAsync();
entity.name = name;
entity = await agent.saveProjectEntityAsync(entity);
context.result.body = JSON.stringify(entity);
