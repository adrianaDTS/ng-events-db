import { InjectionToken } from "@angular/core";


/* this creates a token that can be used to look up the toastr object
inside of the dependency injection registry */
export let TOASTR_TOKEN = new InjectionToken<any>('toastr');

export interface Toastr {
  success(msg: string, title?: string): void;
  info(msg: string, title?: string): void;
  warning(msg: string, title?: string): void;
  error(msg: string, title?: string): void;
}