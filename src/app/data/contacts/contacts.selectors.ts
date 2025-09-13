// тут использовал ИИ полностью для миграции на entity adapter

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContactsState, contactsFeatureKey, entityAdapter } from './contacts.reducer';

// 1. Feature selector
export const selectContactsState = createFeatureSelector<ContactsState>(contactsFeatureKey);

// 2. Entity adapter selectors
const { selectIds, selectEntities, selectAll, selectTotal } = entityAdapter.getSelectors();

// 3. Expose selectors for components
export const selectAllContacts = createSelector(selectContactsState, selectAll);

export const selectContactsEntities = createSelector(selectContactsState, selectEntities);

export const selectContactsStatus = createSelector(selectContactsState, (state) => state.status);

export const selectContactsError = createSelector(selectContactsState, (state) => state.error);

export const selectSelectedContact = createSelector(
    selectContactsState,
    (state) => state.selectedContactId ? state.entities[state.selectedContactId] : null
)