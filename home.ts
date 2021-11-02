import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   users:'thiyagu';
  constructor() { }

  ngOnInit(): void {
  }

  getShortName(fullName) { 
    console.log('fullname : '+fullName);
    return fullName.split(' ').map(n => n[0]).join('');
  }
}
