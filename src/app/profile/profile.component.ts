import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  
  cards = [
    {
      icon: "fa-solid fa-bag-shopping fa-2xl",
      title: "Company Profiles",
      discription: "The A/R Accounts",
      router: "/company"


    },
    {
      icon: "fa-solid fa-file-invoice fa-2xl",
      title: "Payments",
      discription: "Received payments & Settlments",
      router: "/"


    }, {
      icon: "fa-solid fa-file-invoice fa-2xl",
      title: "Invoices",
      discription: "Invoices with standing balance",
      router:"/inovice"


    }, {
      icon: "fa-solid fa-file-invoice fa-2xl",
      title: "Aging",
      discription: "   Invoice Aging",
      router: "/"


    }, {
      icon: "fa-solid fa-chart-simple  fa-2xl",
      title: "Reports",
      discription: "Current & History reports",
      router: "/"


    },
  ]

  ngOnInit(): void {
  }
  constructor(private router: Router) { }

  goPlaces() {
    this.router.navigate(['/invoice']);
  }
}
