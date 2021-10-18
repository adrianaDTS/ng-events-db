import { InjectionToken } from "@angular/core";


/* this creates a token that can be used to look up the toastr object
inside of the dependency injection registry */
export let JQ_TOKEN = new InjectionToken<Object>('jQuery');

