import * as tsclientWebapi from "@superoffice/tsclient.webapi";
let pAgent = new tsclientWebapi.ContactAgent();
let cEntity = await pAgent.CreateDefaultContactEntity();
cEntity.Name = "ContactName";
await pAgent.SaveContactEntity(cEntity);
