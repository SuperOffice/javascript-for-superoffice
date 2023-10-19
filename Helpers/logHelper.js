class Context {
  constructor() {
    this.result = new Result();
    this.vars = {};
    this.funcs = {};
    this.variables = {};
    this.eventData = new EventData();
  }
}

class Result {
  constructor() {
    this.body = "";
    this.status = 200;  // default status
  }
}

class EventData {
  constructor() {
    this.inputValues = {};
    this.blockExecution = false;
    this.navigateTo = "";
    this.message = "";
    this.showDialog = "";
    this.outputValues = {};
    this.stateValues = {};
    this.exception = "";
    this.cgiVariables = new CgiVariables();
    this.cgiContent = "";
  }
}

class CgiVariables {
  constructor() {
    this.action = "";
    this.includeId = "";
    this.key = "";
  }
}

  
// Usage
export const context = new Context();
