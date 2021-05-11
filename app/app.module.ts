import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { NumericTextBoxModule, TextBoxModule} from '@syncfusion/ej2-angular-inputs';

import { CheckBoxModule, ButtonModule  } from '@syncfusion/ej2-angular-buttons';

import { SliderModule } from '@syncfusion/ej2-angular-inputs';

import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
@NgModule({ declarations: [ AppComponent ], imports: [ BrowserModule, DialogModule, SliderModule, BrowserModule, CheckBoxModule, NumericTextBoxModule, TextBoxModule, DropDownListModule, ButtonModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
