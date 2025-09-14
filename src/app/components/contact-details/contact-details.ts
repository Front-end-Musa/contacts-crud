import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DeleteBtn } from '../delete-btn/delete-btn';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopup } from '../delete-popup/delete-popup';

@Component({
  selector: 'app-contact-details',
  imports: [CommonModule, DeleteBtn],
  templateUrl: './contact-details.html',
  styleUrl: './contact-details.scss',
})
export class ContactDetails {
  @Input() contact: Contact | null | undefined = null;

  constructor(private dialog: MatDialog) {}

  openDeletePopup() {
    this.dialog.open(DeletePopup);
  }
}
