import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
import { ThirdComponent } from './third/third.component';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CustomersComponent]
})
export class AppModule { }
