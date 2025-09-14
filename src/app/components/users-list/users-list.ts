import { Component, Input } from '@angular/core';
import { ContactsFacade } from '../../data/contacts/contacts.facade';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule],
  templateUrl: './users-list.html',
  styleUrl: './users-list.scss',
})
export class UsersList {
  @Input() contacts: Observable<Contact[]> | undefined;

  constructor(public facade: ContactsFacade) {}

  selectContact(contact: Contact) {
    this.facade.selectContact(contact.id!);
  }
}
