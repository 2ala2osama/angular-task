import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {

  fName: string = '';
  lName: string = '';
  telNum: number = 0;
  contactEmail: string = '';
  job: string = '';

  dateAdded = new Date();
  constructor(public contactService: ContactService, private toasterService: ToastrService) { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  fname = new FormControl('', [Validators.required]);
  lname = new FormControl('', [Validators.required]);
  telnum = new FormControl('', [Validators.required]);
  Job = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }



  onSubmit() {
    // console.log('clicked');
    let id = this.contactService.contacts.length + 2;
    const newContact: Contact = {
      id: id,
      fName: this.fName,
      lName: this.lName,
      telNum: this.telNum,
      email: this.contactEmail,
      job: this.job,
      date: new Date()
    }
    // console.log(newContact);
    this.toasterService.success(`Contact Added Successfully.`)
    this.contactService.contacts.unshift(newContact);
  }

  addContactBtnEnable() {
    return (this.fName === '' || this.job === '' || this.lName === '' || this.telNum === null || this.contactEmail === '') ? true : false
  }
}

