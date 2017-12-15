import { Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { RenthereumService } from '../contracts/renthereum.service';

const uport =  require('./setupUport.js');
const QRUtil = require('uport-connect').QRUtil;

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
    // Request credentials to login
    uport.requestCredentials({
      requested: ['name', 'phone', 'country'],
      notifications: true // We want this if we want to recieve credentials
    }, this.showQRcode)
    .then((credentials) => {
      console.log(credentials);
    })
  }

  private showQRcode = (uri) => {
    // Creates a QR code URI, this is also a good place to you used any QR code library you prefer.
    const qrCode = QRUtil.getQRDataURI(uri)
    console.log(qrCode);
    console.log(uri);
  }
}
