import { Component, OnInit, Input } from '@angular/core';
import { ContactService } from '../../../services/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.scss']
})
export class ContactComponentComponent implements OnInit {

  @Input() contactInput: any;

  isDelete = false;
  constructor(public contactService: ContactService, private toasterService: ToastrService) {
  }

  ngOnInit(): void {



  }

}

