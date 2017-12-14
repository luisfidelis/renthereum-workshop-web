import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { RenthereumService } from '../contracts/renthereum.service';

@Component({
  selector: 'app-connect-uport',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class ConnectUportComponent implements OnInit {
  title = 'Renthereum';
  private web3;

  itemsToRent: any[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef, public dialog: MatDialog, public renthereum: RenthereumService) {
    renthereum.init();
  }

  ngOnInit() {
  }
}
