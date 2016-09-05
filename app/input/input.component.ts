import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-number',
  template: '<div><p> The next number is {{ mynumber + 1}} </p></div>'
})
export class MyNumberComponent {
  @Input() mynumber: number;
}

@Component({
	selector: 'MyNumberRootComponent',
	directives: [MyNumberComponent],
	template: `<my-number [mynumber]="42"></my-number>`
})
export class MyNumberRootComponent {}