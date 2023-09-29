import { context } from "../../Helpers/logHelper";

//Block execution - old setBlockExecution
context.eventData.blockExecution = true;

//SetNavigateTo
context.eventData.navigateTo = 'soprotocol:sale?sale_id=0';

//Popup message
context.eventData.message = 'Hello world!';

