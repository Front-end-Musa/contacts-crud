import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { contactsFeatureKey, contactsReducer } from './data/contacts/contacts.reducer';
import { provideEffects } from '@ngrx/effects';
import { ContactsEffects } from './data/contacts/contacts.effects';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    provideHttpClient(),
    provideStore({ [contactsFeatureKey]: contactsReducer }),
    provideEffects([ContactsEffects]),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
