import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  dtOptions: DataTables.Settings={};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('TABLE', { static: false })
  TABLE!: ElementRef;  
  title = 'Excel';  
  ExportTOExcel() {  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
    XLSX.writeFile(wb, 'monthlyreport.xlsx');  
  } 
}
