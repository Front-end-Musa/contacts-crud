import { createAction, props } from "@ngrx/store";

export const loadContacts = createAction('[Contacts] Load Contacts');
export const loadContactsSuccess = createAction(
    '[Contacts] Load Contacts Success',
    props<{ contacts: Contact[] }>()
);
export const loadContactsFailure = createAction(
  '[Contacts/API] Load Contacts Failure',
  props<{ error: string }>()
);

export const addContact = createAction(
  '[Contacts] Add Contact',
  props<{ contact: Contact }>()
);
export const addContactSuccess = createAction(
  '[Contacts] Add Contact Success',
  props<{ contact: Contact }>()
);
export const addContactFailure = createAction(
  '[Contacts/API] Add Contact Failure',
  props<{ error: string }>()
);