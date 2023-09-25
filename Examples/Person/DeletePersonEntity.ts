import { RTL } from "../../Helpers/extensionMethods";
import { context } from "../../Helpers/logHelper";

//Variables
const personId: number = 2;

const agent = new RTL.PersonAgent();
await agent.deletePersonEntityAsync(personId);
context.result.body = 'PersonId '+ personId.toString() + 'deleted'; 