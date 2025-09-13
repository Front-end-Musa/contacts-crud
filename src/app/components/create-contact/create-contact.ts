import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactsFacade } from '../../data/contacts/contacts.facade';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-create-contact',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatDialogModule],
  templateUrl: './create-contact.html',
  styleUrl: './create-contact.scss',
})
export class CreateContact {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactsFacade: ContactsFacade) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const newContact: Contact = {
        name: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        phone: this.contactForm.value.phone,
      };
      console.log('New Contact:', newContact);
      this.contactsFacade.addContact(newContact);
      this.contactForm.reset();
    }
    console.log('Form submitted');
  }
}
