class Context {
    result: {
      body: string;
      status: number;
    };
    vars: Record<string, unknown>;
    funcs: Record<string, unknown>;
    variables: {
      activeUser: string;
      developmentMode: string;
      includeId: string;
    };
    eventData: {
      inputValues: Record<string, unknown>;
      navigateTo: string;
      message: string;
      showDialog: string;
      outputValues: Record<string, unknown>;
      stateValues: Record<string, unknown>;
      exception: string;
      blockExecution: boolean;
    };
  
    constructor() {
      this.result = {
        body: "",
        status: 200
      };
      this.vars = {};
      this.funcs = {};
      this.variables = {
        activeUser: "",
        developmentMode: "",
        includeId: ""
      };
      this.eventData = {
        inputValues: {},
        navigateTo: "",
        message: "",
        showDialog: "",
        outputValues: {},
        stateValues: {},
        exception: "",
        blockExecution: false
      };
    }
  }
  
  // Usage
  export const context = new Context();
  