import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContactsFacade } from '../../data/contacts/contacts.facade';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-delete-popup',
  imports: [MatDialogModule, AsyncPipe],
  templateUrl: './delete-popup.html',
  styleUrl: './delete-popup.scss'
})
export class DeletePopup {
  constructor(public facade: ContactsFacade, private dialog: MatDialog) { }
  
  deleteContact() {
    this.facade.deleteContact(this.facade.selectedId$);
    this.dialog.closeAll();
  }
}
