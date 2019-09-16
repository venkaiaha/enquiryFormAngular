import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {
  isLinear = false;
  signupform:any;
  username:any;
  mobile:any;
  password:any;
  email:any;
  url:any='http://localhost:5009/';
  

  constructor(private _formBuilder: FormBuilder,public http:HttpClient,public router:Router) {
    this.signupform = this._formBuilder.group({
      student_name: ['', Validators.required],
      mobile: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      course_for: ['', Validators.required],
      joining_date: ['', Validators.required],


    });
  }

  signup(event: any) {
    if (this.signupform.valid) {
      const httpOptions = {
        headers: new HttpHeaders({
          'content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          // 'authorization': 'Bearer ' ,
        })
      }
      var body={'student_name':this.signupform.value['student_name'],
                'spouse':this.signupform.value['spouse'],
                'email':this.signupform.value['email'],
                'mobile':this.signupform.value['mobile'],
                'gender':this.signupform.value['gender'],
                'dob':this.signupform.value['dob'],
                'qualification':this.signupform.value['qualification'],
                'course_for':this.signupform.value['course_for'],
                'reason':this.signupform.value['reason'],
                'joining_date':this.signupform['joining_date'],
                'experience':this.signupform.value['experience'],
                'address_line1':this.signupform.value['address_line1'],
                'address_line2':this.signupform.value['address_line2'],
                'city':this.signupform.value['city'],
                'state':this.signupform.value['state'],
                'country':this.signupform.value['country'],
                'zip_code':this.signupform.value['zip_code']
              
              }
      this.http.post(this.url + "api/signup",body, httpOptions).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['']);
        }, error => {
          console.log(error);
        })
    }
  }

  ngOnInit() {
    
  }
}