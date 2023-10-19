import { context } from "./logHelper";

function print(value){
    context.result.body += value;
};

function getCgiVariables(context){
    const cgiVariables = context?.eventData?.cgiVariables;
    if(cgiVariables == undefined){
        return {};
    }
    return cgiVariables;
}


function getCgiContent(context){
    const cgiContent = context?.eventData?.cgiContent;
    if(cgiContent == undefined){
        return "";
    }
    return cgiContent;
};