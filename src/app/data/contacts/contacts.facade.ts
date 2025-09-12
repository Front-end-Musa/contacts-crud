import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllContacts } from './contacts.selectors';
import { loadContacts, addContact } from './contacts.actions';

@Injectable({
  providedIn: 'root',
})
export class ContactsFacade {
  store: Store = inject(Store);
  contacts$: Observable<Contact[]> = this.store.select(selectAllContacts);
  constructor() {}

  getContacts() {
    this.store.dispatch(loadContacts());
  }

  selectContact(contactId: number) {
    // Implementation for selecting a contact can be added here
    console.log(`Contact with ID ${contactId} selected.`);
  }

  addContact(contact: Contact) {
    this.store.dispatch(addContact({ contact }));
  }
}