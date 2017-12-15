import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { NewItemDialogComponent } from './dashboard/dialogs/new-item-dialog';
import { RentItemDialogComponent } from './dashboard/dialogs/rent-item-dialog';
import { RenthereumService } from './contracts/renthereum.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Renthereum';
  private web3;

  itemsToRent: any[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef, public dialog: MatDialog, public renthereum: RenthereumService) {
    renthereum.init();
  }

  connectUport(): void {
    
  }
  ngOnInit() {
   // this.loadItems();
  }
}
