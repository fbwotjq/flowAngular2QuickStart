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

	ngOnInit() {
		console.log("call ngOnInit in Zippy Component");
		// Properties are resolved and things like
		// this.mapWindow and this.mapControls
		// had a chance to resolve from the
		// two child components <map-window> and <map-controls>
	}

	ngOnDestroy() {
		console.log("call ngOnDestroy in Zippy Component");
    	// Speak now or forever hold your peace
	}

	ngDoCheck() {
		console.log("call ngDoCheck in Zippy Component");
    	// Custom change detection
	}

	ngOnChanges(changes) {
		console.log("call ngOnChanges in Zippy Component");
	    // Called right after our bindings have been checked but only
	    // if one of our bindings has changed.
	    //
	    // changes is an object of the format:
	    // {
	    //   'prop': PropertyUpdate
	    // }
	}

	ngAfterContentInit() {
		console.log("call ngAfterContentInit in Zippy Component");
		// Component content has been initialized
	}

	ngAfterContentChecked() {
		console.log("call ngAfterContentChecked in Zippy Component");
		// Component content has been Checked
	}

	ngAfterViewInit() {
		console.log("call ngAfterViewInit in Zippy Component");
		// Component views are initialized
	}

	ngAfterViewChecked() {
		console.log("call ngAfterViewChecked in Zippy Component");
		// Component views have been checked
	}
}