import { context } from "./logHelper";

function print(value: string){
    context.result.body += value;
};

function getCgiVariables(context: { eventData: { cgiVariables: any; }; }){
    const cgiVariables = context?.eventData?.cgiVariables;
    if(cgiVariables == undefined){
        return {};
    }
    return cgiVariables;
}


function getCgiContent(context: { eventData: { cgiContent: any; }; }){
    const cgiContent = context?.eventData?.cgiContent;
    if(cgiContent == undefined){
        return "";
    }
    return cgiContent;
};