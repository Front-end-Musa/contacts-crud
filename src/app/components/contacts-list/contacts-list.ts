import { Component, OnInit } from '@angular/core';
import { ContactsFacade } from '../../data/contacts/contacts.facade';
import { CommonModule, NgFor } from '@angular/common';
import { CreateContact } from '../create-contact/create-contact';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ContactDetails } from '../contact-details/contact-details';

@Component({
  selector: 'app-contacts-list',
  imports: [CommonModule, ContactDetails],
  templateUrl: './contacts-list.html',
  styleUrl: './contacts-list.scss',
})
export class ContactsList implements OnInit {
  contacts!: Observable<Contact[]>;
  constructor(public facade: ContactsFacade, private dialog: MatDialog) {}

  ngOnInit() {
    this.facade.getContacts();
    this.contacts = this.facade.contacts$;
  }

  ngOnDestroy() {
    this.facade.contacts$.subscribe().unsubscribe();
  }

  selectContact(contact: Contact) {
    this.facade.selectContact(contact.id!);
  }

  addContact() {
    this.dialog.open(CreateContact);
    console.log('Add contact button clicked');
  }
}
