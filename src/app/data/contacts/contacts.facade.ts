import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllContacts, selectSelectedContact } from './contacts.selectors';
import { loadContacts, addContact, selectContact } from './contacts.actions';

@Injectable({
  providedIn: 'root',
})
export class ContactsFacade {
  store: Store = inject(Store);
  contacts$: Observable<Contact[]> = this.store.select(selectAllContacts);
  selectedContact$: Observable<Contact | null | undefined> = this.store.select(selectSelectedContact);
  constructor() {}

  getContacts() {
    this.store.dispatch(loadContacts());
  }

  selectContact(contactId: string) {
    this.store.dispatch(selectContact({ contactId }));
    console.log(`Contact with ID ${contactId} selected.`);
  }

  addContact(contact: Contact) {
    this.store.dispatch(addContact({ contact: contact }));
  }
}