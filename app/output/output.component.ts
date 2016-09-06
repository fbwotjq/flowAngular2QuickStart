import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'zippy',
	template: `
	<div class="zippy">
		<button (click)="toggle()">눌러봐 ~</button>
		<div [hidden]="!visible">
			@Output 데코레이터를 통한 이벤트 동적 바인딩 
		</div>
	</div>`
})
export class Zippy {
  visible: boolean = true;
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(null);
    } else {
      this.close.emit(null);
    }
  }
}