import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-dirctory',
  templateUrl: './dirctory.component.html',
  styleUrls: ['./dirctory.component.scss']
})
export class DirctoryComponent implements OnInit {


  ngOnInit(): void {
  }
  constructor(public contactService: ContactService) { }

}
