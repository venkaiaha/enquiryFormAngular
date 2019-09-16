import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {environment} from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  url:any="http://localhost:5010/";
  
  // django:any;
  flask:any;
  limit:number=5;
  skip:number=0;
  count:number;
  back_end:any={"length": 249,
    "pageIndex": 0,
    "pageSize": 5,
    "previousPageIndex": -1};
  
  applyFilter(filterValue: string) {
    this.flask.filter = filterValue.trim().toLowerCase();
  }

  displayedColumns=["fullname","email","mobile","reason","course","joiningdate","view","edit","delete"];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  getrecord(){
    var headers= new HttpHeaders(); 
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append('content-Type','application/json')

    this.http.get("http://127.0.0.1:5010/students/", {"headers": headers}).subscribe(
      res=>{
        
        console.log(res)
        this.flask = new MatTableDataSource() ;
        this.flask.data=res;
        this.flask.sort = this.sort;
        this.flask.paginator=this.paginator;
        console.log(this.flask.data);
      },
      error=>{
        console.log(error);
      }
    );
  }
  deleteRecord(data:any){
    var headers= new HttpHeaders(); 
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append('content-Type','application/json')

    this.http.delete("http://127.0.0.1:5010/students/"+data["_id"], {"headers": headers}).subscribe(
      res=>{
        
        console.log(res)
        alert('Record Deleted successfully ! ')
        this.router.navigate(['/details'])
      },
      error=>{
        console.log(error);
      }
    );


  }
  

  constructor(public http:HttpClient, public router: Router) { }
  editPop(data: any){
console.log(data);
localStorage.setItem('row_data' , JSON.stringify(data));
    this.router.navigate(['/update'])
  }
  ngOnInit() {
    this.getrecord();
    // this.pageEvent(this.back_end);
    
  }
  // pageEvent(event:any){
  //   this.limit=event.pageSize;
  //   var page_index=event.pageIndex;
  //   this.skip=this.limit*page_index;
  //   this.http.post(this.url+"limit",{"limit":this.limit,"skip":this.skip}).subscribe(
  //     data=>{
  //       console.log(data);
  //       this.count=data['count']
  //       this.flask = new MatTableDataSource() ;
  //       this.flask=data["data"]
  //       this.flask.sort = this.sort;
  //       this.flask.paginator=this.paginator;
  //     },
  //     error=>{
  //       console.log(error);
  //     }
      

  //   )

  //   console.log(event);

  // }

}
