import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ConnectUportComponent } from './connectUport.component';
import { RenthereumService } from '../contracts/renthereum.service';

@NgModule({
  declarations: [
    ConnectUportComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
})
export class ConnectUportModule {
  
}
