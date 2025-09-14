import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../services/api.service';
import * as contactsActions from './contacts.actions';
import { switchMap, map, catchError, of, mergeMap } from 'rxjs';

@Injectable()
export class ContactsEffects {
  private actions$ = inject(Actions);
  private apiService = inject(ApiService);

  loadContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(contactsActions.loadContacts),
      switchMap(() =>
        this.apiService.getUsers().pipe(
          map((response) => contactsActions.loadContactsSuccess({ contacts: response })),
          catchError((error) => of(contactsActions.loadContactsFailure({ error: error.message })))
        )
      )
    )
  );
  
  addContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(contactsActions.addContact),
      mergeMap(({ contact }) =>
        this.apiService.addUser(contact).pipe(
          map((savedContact) => contactsActions.addContactSuccess({ contact: savedContact })),
          catchError((error) => of(contactsActions.addContactFailure({ error: error.message })))
        )
      )
    )
  );

  deleteContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(contactsActions.deleteContact),
      mergeMap(({ contactId }) =>
        this.apiService.deleteUser(contactId).pipe(
        map(() => contactsActions.deleteContactSuccess({ contactId })),
          catchError((error) => of(contactsActions.deleteContactFailure({ error: error.message })))
        )
      ))
  )
}
