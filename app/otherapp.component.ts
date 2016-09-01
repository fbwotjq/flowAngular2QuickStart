import { Component } from '@angular/core';

interface Person {
  id: number;
  name: string;
  webpage: string;
}

@Component({
  selector: 'other-my-app',
  template:`
    <h1>{{title}}</h1>
    <h2>I'm {{person.name}}!</h2>
    <div>My Website : <a href={{person.webpage}}>{{person.webpage}}</a></div>
    <div>
      <label>name: </label>
      <div><input [(ngModel)]="person.name" placeholder="name"></div><br>
      <label>webpage: </label>
      <div><input [(ngModel)]="person.webpage" placeholder="webpage"></div>
    </div>
    `
})
export class OtherAppComponent {
  public title = 'Dalkom IT World';
  public person: Person = {
    id: 1,
    name: 'fbwotjq',
    webpage:'http://www.fbwotjq.com'
  };
}