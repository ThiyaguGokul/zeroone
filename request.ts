import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { RequestService } from './request.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  reqDetails=null;
  dtOptions: DataTables.Settings={};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private router:Router,private _reqService:RequestService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      
    };
  }

  getRequest(status:any){
    this._reqService.getAllRequests(status).subscribe(
      (response) => {
        console.log(response.requestList);
        this.reqDetails=response.requestList;
        console.log(JSON.stringify(this.reqDetails));
        
        console.log(response);
        this.dtTrigger.next();
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
