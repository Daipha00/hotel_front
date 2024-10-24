import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popupform',
  templateUrl: './popupform.component.html',
  styleUrl: './popupform.component.css'
})
export class PopupformComponent {
submitForm() {
throw new Error('Method not implemented.');
}
onNoClick() {
throw new Error('Method not implemented.');
}
data: any;
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(PopupformComponent, {
      width: '400px', // Set the width of the dialog
      data: {}        // Pass any data to the dialog if needed
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(`Dialog result: ${result}`);  // Handle the result if needed
    });
  }

}
