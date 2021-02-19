import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from '../components/header/header.component';
import { CardComponent } from '../components/card/card.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule }   from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    NgxMaskModule.forRoot(),
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
