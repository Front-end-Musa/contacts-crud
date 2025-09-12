// тут использовал ИИ для создания enitity adapter

import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as contactsActions from './contacts.actions';

export interface ContactsState extends EntityState<Contact> {
  status: 'init' | 'loading' | 'loaded' | 'error' | string;
  error: null | string;
}

export const entityAdapter: EntityAdapter<Contact> = createEntityAdapter<Contact>();

export const initialState: ContactsState = entityAdapter.getInitialState({
  status: 'init',
  error: null,
});


export const contactsReducer = createReducer(
  initialState,
  on(contactsActions.loadContacts, (state) => ({
    ...state,
    status: 'loading',
    error: null,
  })),
  on(contactsActions.loadContactsSuccess, (state, { contacts }) => entityAdapter.setAll(contacts, {
    ...state,
    status: 'loaded',
    error: null,
  })),
  on(contactsActions.loadContactsFailure, (state, { error }) => ({
    ...state,
    status: 'error',
    error: error,
  })),
  on(contactsActions.addContact, (state) => ({
    ...state,
    status: 'loading',
    error: null,
  })),
  on(contactsActions.addContactSuccess, (state, { contact }) => entityAdapter.addOne(contact, {
    ...state,
    status: 'loaded',
    error: null,
  })),
  on(contactsActions.addContactFailure, (state, { error }) => ({
    ...state,
    status: 'error',
    error: error,
  }))
);

export const contactsFeatureKey = 'contacts';
