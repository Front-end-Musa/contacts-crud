import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectAllContacts, selectSelectedContact } from './contacts.selectors';
import { loadContacts, addContact, selectContact, deleteContact } from './contacts.actions';

@Injectable({
  providedIn: 'root',
})
export class ContactsFacade {
  store: Store = inject(Store);
  contacts$: Observable<Contact[]> = this.store.select(selectAllContacts);
  selectedContact$: Observable<Contact | null | undefined> =
    this.store.select(selectSelectedContact);
  selectedId$: Observable<string | null | undefined> = this.selectedContact$.pipe(
    map((contact) => (contact ? contact.id : null))
  );
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

  deleteContact(contactId$: Observable<string | null | undefined>) {
    contactId$.subscribe((contactId) => {
      if (contactId != null && contactId != undefined) {
        this.store.dispatch(deleteContact({ contactId: contactId }));
        console.log(`Contact with ID ${contactId} deleted.`);
      } else {
        console.error('No contact selected for deletion.');
      }
    }).unsubscribe();
  }
}
