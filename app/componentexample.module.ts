import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ClickComponent }  from './componentexample.component';
import { KeyUpComponent_v1 }  from './keyupevent.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
  	ClickComponent, 
  	KeyUpComponent_v1
  ],
  bootstrap:    [ ClickComponent,KeyUpComponent_v1 ]
})
export class ComponentExampleModule { }
