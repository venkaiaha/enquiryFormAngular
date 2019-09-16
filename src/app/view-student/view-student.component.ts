import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {
  row_data:any;

  constructor() { }

  ngOnInit() {
    this.row_data = JSON.parse(localStorage.getItem("row_data"));
    console.log(this.row_data)
  }
  

}
