# What is CRMScript V2?
CRMSCript V2 enables you to write scripts with javascript, moving away from the traditional CRMscript-language as a whole. 
The new engine implements everything the netserver has to offer, and the syntax looks familiar to those who has previously used the webapi. 

This repo contains basic examples to get started writing scripts, and some helpers to get the proper intellisense in vscode.

# Using this git repo:
1. git clone https://github.com/juleiste/CRMScriptsV2.git
2. Open the terminal and run 'npm run setup'
3. Check out the Examples-folder

# How do i run my script?
The scripts still need to be executed inside of SuperOffice!! This means you will have to copy-paste the JS-scripts into the SuperOffice-editor after creation.

VSCODE:
To help the editor understand the @types we need to have the import-statement at the top of the file. This line is redundant in the SuperOffice-script, as it s imported by default. 

It is also important that you import the extensionMethods as RTL, as that is what the SuperOffice-environment expects.

Lets use CreateContactEntity.js as an example:
<!-- START:.js -->
```typescript
import { RTL } from "../../Helpers/extensionMethods";
import { context } from "../../Helpers/logHelper";
//Variables
const newName = "NewName";
const agent = new RTL.ContactAgent();
let entity = await agent.createDefaultContactEntityAsync();
entity.Name = newName;
entity = await agent.saveContactEntityAsync(entity);
context.result.body = JSON.stringify(entity);

```
<!-- END:.js -->

And this is what you copy-paste into your SuperOffice-Script (without the lines with import):
<!-- START:.crmscript -->
```typescript
//Variables
const newName = "NewName";
const agent = new RTL.ContactAgent();
let entity = await agent.createDefaultContactEntityAsync();
entity.Name = newName;
entity = await agent.saveContactEntityAsync(entity);
context.result.body = JSON.stringify(entity);

```
<!-- END:.crmscript -->

# How do i log anything in SuperOffice?
The good old print()/printLine() is now gone, and we need to use 'context.result.body' to print any of the values back into the debug-window.
Example:
```javascript
context.result.body = "foo";
```

# What is 'context'?
Context is the model that contains data (eventData, cgiVariables etc) in the new script. 

You can run this to see whats inside the context. 
```javascript
context.result.body = JSON.stringify(context);
```

# Do i need to clone this repo to create scripts?
No, this repo only contains a starting-point for you to make your own scripts. 
We supply an NPM package you can import into any project of your choosing:

URL: https://www.npmjs.com/package/@superoffice/webapi
Command: npm i @superoffice/webapi 

As long as you import this package as RTL you should not have any problems. 

PS: This NPM package does not contain the class Context, so you can either copy-paste the logHelper.js into your own project or create the class yourself. 

# Disclaimer
1. 'OLD' CRMScripts will continue to work, but new scripts should be made in javascript. 
2. This repo only contains examples on how to handle different entities, and will expand as new functionality is created. 
3. Importing your own NPM-packages are as of 25.09.2023 not supported. 
4. Only NetServer Classes are currently supported, so trying to use classes from Service (e.g. Ticket t;) or other shenanigans are not working. 

Hopefully this shows how would to get writing new Scripts. Got any feedback? Please create an issue on this repo to improve its readability and usefullness!