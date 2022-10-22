import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent {
  name = 'Angular';
  company: [] | any;
  isVisible: boolean = false;
  constructor() {
    this.company = [

      {
        title: "Travel Agent",
        discription: "A/R #62541: INN TOURS & TRAVEL-- Amman, Jordan, PO Box 123456 Contact: Ali Omar, example@email.com,+962 790000000",
        limit: "10,000 USD",
        balance: "200 USD",
        "editable": false

      },
      {
        title: "Travel Agent",
        discription: "A/R #5214: LEISURE INN-9750 USD Travel Agent- Riyadh, KSA, PO Box 212541",
        limit: "10,000 USD",
        balance: "24200 USD",
        "editable": false

      }
    ]
  }

  editDomain(company: any) {
    company.editable = !company.editable;
  }

  addNewRow() {
    this.company.push({ discription: '', title: '', limit: '', balance:'' });
  }
}
