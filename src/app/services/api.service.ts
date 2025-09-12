import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl: string = 'https://dummyjson.com/c/c609-44b4-441d-9f29';
  // private apiUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<{ contacts: Contact[] }> {
    return this.http.get<{ contacts: Contact[] }>(this.apiUrl);
  }

  addUser(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.apiUrl, contact);
  }
}
