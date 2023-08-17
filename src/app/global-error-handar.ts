import { ErrorHandler } from "@angular/core";

export class GlobalErrorHandar implements ErrorHandler {
    handleError(error: any) {
      console.log('I am gloab error hanlding')
      console.log(error)
      // do something with the exception
    }
  }