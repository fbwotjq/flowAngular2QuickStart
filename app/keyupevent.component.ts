import { Component } from '@angular/core';

@Component({
	selector: 'keyup-event1',
	template: `<input (keyup)="onKey($event)"/><p>{{value}}</p>`
})
export class KeyUpComponent_v1 {
	value = '';
	onKey(event: KeyboardEvent){
		this.value += (<HTMLInputElement>event.target).value + '|';
	}
}