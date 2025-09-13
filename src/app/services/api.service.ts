import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string = 'https://68c52a18a712aaca2b6805c2.mockapi.io/contacts/v1/contacts';
  // private apiUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Contact[] > {
    return this.http.get<Contact[]>(this.apiUrl);
  }

  addUser(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
