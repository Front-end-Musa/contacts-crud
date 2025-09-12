import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { contactsFeatureKey, contactsReducer } from './data/contacts/contacts.reducer';
import { provideEffects } from '@ngrx/effects';
import { ContactsEffects } from './data/contacts/contacts.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideStore({ [contactsFeatureKey]: contactsReducer }),
    provideEffects([ContactsEffects]),
    provideHttpClient(),
  ],
};
