class Result {
  body: string;
  status: number;

  constructor() {
    this.body = "";
    this.status = 200; // default status
  }
}

class CgiVariables {
  action: string;
  includeId: string;
  key: string;

  constructor() {
    this.action = "";
    this.includeId = "";
    this.key = "";
  }
}

class EventData {
  inputValues: Record<string, any>;
  blockExecution: boolean;
  navigateTo: string;
  message: string;
  showDialog: string;
  outputValues: Record<string, any>;
  stateValues: Record<string, any>;
  exception: string;
  cgiVariables: CgiVariables;
  cgiContent: string;

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

class Context {
  result: Result;
  vars: Record<string, any>;
  funcs: Record<string, Function>;
  variables: Record<string, any>;
  eventData: EventData;

  constructor() {
    this.result = new Result();
    this.vars = {};
    this.funcs = {};
    this.variables = {};
    this.eventData = new EventData();
  }
}

// Usage
export const context = new Context();