import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, provideForms, disableDeprecatedForms } from '@angular/forms';

import { OtherAppComponent }  from './otherapp.component';

@NgModule({
  imports: 		[ BrowserModule, FormsModule ],
  declarations: [ OtherAppComponent ],
  bootstrap:    [ OtherAppComponent ]
})
export class OtherAppModule { }
