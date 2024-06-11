import { context } from "../../Helpers/logHelper";

%EJSCRIPT_START%
<%
context.result.body = JSON.stringify(context);
%>
%EJSCRIPT_END%