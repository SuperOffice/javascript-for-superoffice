import { RTL } from "../../Helpers/extensionMethods";
import { context } from "../../Helpers/logHelper";

const agent = new RTL.PersonAgent();
await agent.deletePersonEntityAsync(2);