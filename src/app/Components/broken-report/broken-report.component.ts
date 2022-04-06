import { Component, OnInit } from '@angular/core';
import { Complex } from '../../complex';
import { Location } from '../../location';
import { ComplexService } from '../../complex.service';
import { Partsource } from 'src/app/partsource';
import { Brokenpackreport } from 'src/app/brokenpackreport';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import * as XLSX from 'xlsx';






@Component({
  selector: 'app-broken-report',
  templateUrl: './broken-report.component.html',
  styleUrls: ['./broken-report.component.css']
})
export class BrokenReportComponent implements OnInit {

  /**defining the parameter like location.ts file and Complex.ts and selected part through ng model
  */


  complexs: Complex[] | undefined;
  ComplexSelected1: number | undefined ;
  locationSelected: string | undefined;
  partsourceSelected:string | undefined;
  lstlocation: Location[] | undefined;
  lstpartsource: Partsource[] | undefined;
  lstfinalresult: Brokenpackreport[] | undefined;
  showMe: boolean = false
  

 

  /**making the Complex Service Constructor
  */
  constructor(private complexService: ComplexService) { }

  

  ngOnInit(): void {
   
    
    /**Defining the Get user and taking the value from the array Complex
  */
    this.complexService.getUsers()
    .subscribe
    (
      (data: Complex[]) =>
       {
      console.log(data);
      this.complexs = data;
      }
    );
    
  }

  onComplexSelected1(ComplexSelected1:number):void{
    this.complexService.getLocations(ComplexSelected1)
    .subscribe
    (
      (data: Location[]) =>
       {
         console.log(data);
         this.lstlocation = data;
     
      }
    );

 }

  onlocationSelected(locationSelected:string):void{
    this.complexService.getpartsources(locationSelected)
    .subscribe
    (
      (data: Partsource[]) =>
       {
         console.log(data);
         this.lstpartsource = data;
     
      }
    );

}


  onSubmit(data1:any):void{
     this.complexService.getbrokenpackresult(data1.value1,data1.value2,data1.value3)
     .subscribe
     (
       (data:Brokenpackreport[])=>
       {
         console.log(data);
         this.lstfinalresult=data;
       }
     )
   }



/*
onSubmit(data1:any) {
  console.warn(data1.value1);
  console.warn(data1.value2);
}
*/

toggleTag() {
this.showMe=!this.showMe
}

fileDownload(){
 var options = { 
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalseparator: '.',
  showLabels: true, 
  showTitle: true,
  title: 'Your title',
  useBom: true,
  noDownload: true,
  headers: ["First Name", "Last Name", "ID"]
};

new ngxCsv(this.lstfinalresult, "brokenreport", options);


}
// excel download code
title = 'angular-app';
fileName = 'ExcelSheet.xlsx';


exportexcel(): void {
/* pass here the table id */
this.showMe=!this.showMe
let element = document.getElementById('box');
const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);



/* generate workbook and add the worksheet */
const wb: XLSX.WorkBook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');



/* save to file */
XLSX.writeFile(wb, this.fileName);



}
}