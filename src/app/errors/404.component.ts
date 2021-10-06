import { Component } from '@angular/core';

@Component({
  template: `
    <h1 class="errorMessage">Ups... 404'd</h1>
  `,
  styles: [`
    .errorMessage {
      margin-top:150px;
      font-size: 100px;
      text-align: center;
    }`]
})
export class Error404Component {
  constructor() {

  }

}