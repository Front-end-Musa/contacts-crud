import { Component, OnInit } from '@angular/core';
import { ContactsFacade } from '../../data/contacts/contacts.facade';
import { CommonModule, NgFor } from '@angular/common';
import { PopupService } from '../../services/popup.service';
import { CreateContact } from '../create-contact/create-contact';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contacts-list',
  imports: [CommonModule],
  templateUrl: './contacts-list.html',
  styleUrl: './contacts-list.scss',
})
export class ContactsList implements OnInit {
  contacts: Contact[] = [];
  constructor(
    private facade: ContactsFacade,
    public popupService: PopupService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.facade.getContacts();
    this.facade.contacts$.subscribe((contacts) => {
      console.log('contacts:', contacts, Array.isArray(contacts));
      this.contacts = contacts;
    });
    console.log('contacts in component after subscribe:', this.contacts);
  }

  selectContact(contact: Contact) {
    this.facade.selectContact(contact.id);
  }

  addContact() {
    this.popupService.open();
    this.dialog.open(CreateContact);
    console.log('Add contact button clicked');
  }
}
