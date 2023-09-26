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

Lets use CreateContactEntity.cs as an example:
<!-- START:.ts -->
```typescript
import { RTL } from "../../Helpers/extensionMethods";
import { context } from "../../Helpers/logHelper";

//Variables
const newName: string = "NewName";

const agent = new RTL.ContactAgent();
let entity = await agent.createDefaultContactEntityAsync();
entity.Name = newName;
entity = await agent.saveContactEntityAsync(entity);
context.result.body = JSON.stringify(entity);
```
<!-- END:.ts -->

After you have run 'npx tsc' this will get compiled into a .js-file (it creates a new file in the same location):
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

# Why does this repo contain typescript-examples?
From typescriptlang.org: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.' 

CRMScript V2 technically supports javascript, but this repo will contain examples in .ts, and you can compile the scripts to .js (not included in the repo).

For instance, this is a valid syntax in typescript, as it declares what type a variable is:
```javascript
let myString: string;
myString = "ContactName2"; 
```

The output in javascript, on the other hand, would look like this:
```javascript
let myString;
myString = "ContactName2"; 

```

In other words you dont need to write typescript and compile it into javascript, as you could just write javascript directly, but typescript does give you an easier time maintaining your code. 

# Disclaimer
1. 'OLD' CRMScripts will continue to work, but new scripts should be made in javascript. 
2. This repo only contains examples on how to handle different entities, and will expand as new functionality is created. 
3. Importing your own NPM-packages are as of 25.09.2023 not supported. 
4. Only NetServer Classes are currently supported, so trying to use classes from Service (e.g. Ticket t;) or other shenanigans are not working. 

Hopefully this shows how would to get writing new Scripts. Got any feedback? Please create an issue on this repo to improve its readability and usefullness!