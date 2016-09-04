import { Component } from '@angular/core';

@Component({
  selector: 'click-component',
  template: `<button (click)="onClickMe()">Click me!</button>{{clickMessage}}`
})
export class ClickComponent {
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}