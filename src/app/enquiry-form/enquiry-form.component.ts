import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, Validators,EmailValidator, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.scss']
})
export class EnquiryFormComponent implements OnInit {
  signupform:FormGroup;
  addressform:FormGroup;
  url:any="http://localhost:5010/";
  row_data : any;

  signup(event: any) {
    if (this.signupform.valid) {
      const httpOptions = {
        headers: new HttpHeaders({
          'content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          // 'authorization': 'Bearer ' ,
        })
      }
      var body={'fullname':this.signupform.value['fullname'],
      'fathersname':this.signupform.value['fathersname'],
      'mobile':this.signupform.value['mobile'],
      'course':this.signupform.value['course'],
      'dob':this.signupform.value['dob'],
      'gender':this.signupform.value['gender'],
      'reason':this.signupform.value['reason'],
      'qualification':this.signupform.value['qualification'],
      'experince':this.signupform.value['experince'],
      'joiningdate':this.signupform.value['joiningdate'],
      'email':this.signupform.value['email'],
      'address':{
      'line':this.addressform.value['line'],
      'line1':this.addressform.value['line1'],
      'post_code':this.addressform.value['post_code'],
      'city':this.addressform.value['city'],
      'state':this.addressform.value['state'],
      'country':this.addressform.value['country'],}


    }
      this.http.post(this.url + "students/",body, httpOptions).subscribe(
        data => {
          console.log(data)
          alert('Successfully registed & we will contact you soon !!')
          this.router.navigate(['']);
        }, error => {
          console.log(error);
        })
    }
    
  }

  constructor(public http:HttpClient,public router:Router,public fb:FormBuilder) {
    this.signupform = this.fb.group({
      fullname: ['', Validators.required],
      fathersname: ['', Validators.required],
      course: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      qualification: ['', Validators.required],
      experince: [''],
      joiningdate: ['', Validators.required],
      address:this.fb.group({
        line: [''],
        line1: [''],
        country: [''],
        city: [''],
        state: [''],
        post_code:['']
      }),
      reason: [''],
      mobile: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
    });
    this.addressform=this.fb.group({
      line: [''],
        line1: [''],
        country: [''],
        city: [''],
        state: [''],
        post_code:['']

    });
   }

  ngOnInit() {
    this.row_data = JSON.parse(localStorage.getItem("row_data"));
    if(this.row_data != null){
      this.signupform.patchValue(this.row_data);

    }
  }

}