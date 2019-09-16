import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, Validators, EmailValidator, FormGroup } from '@angular/forms';
// base 64 conversion function
function readBase64(file): Promise<any> {
  const reader = new FileReader();
  const future = new Promise((resolve, reject) => {
    reader.addEventListener('load', function () {
      resolve(reader.result);
    }, false);

    reader.addEventListener('error', function (event) {
      reject(event);
    }, false);
    reader.readAsDataURL(file);
  });
  return future;
}

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {
  signupform: FormGroup;
  addressform: FormGroup;
  url: any = "http://localhost:5010/";
  row_data: any;
  b64:any;
// back end service call (POST Method)
  signup(event: any) {
    if (this.signupform.valid) {
      const httpOptions = {
        headers: new HttpHeaders({
          'content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        })
      }
      var body = {
        'fullname': this.signupform.value['fullname'],
        'fathersname': this.signupform.value['fathersname'],
        'mobile': this.signupform.value['mobile'],
        'course': this.signupform.value['course'],
        'dob': this.signupform.value['dob'],
        'gender': this.signupform.value['gender'],
        'reason': this.signupform.value['reason'],
        'qualification': this.signupform.value['qualification'],
        'experince': this.signupform.value['experince'],
        'joiningdate': this.signupform.value['joiningdate'],
        'email': this.signupform.value['email'],
        'address': {
          'line': this.addressform.value['line'],
          'line1': this.addressform.value['line1'],
          'post_code': this.addressform.value['post_code'],
          'city': this.addressform.value['city'],
          'state': this.addressform.value['state'],
          'country': this.addressform.value['country'],
        }


      }
      var url = "http://127.0.0.1:5010/students/" + this.row_data['_id'];
      this.http.put(url, body, httpOptions).subscribe(
        data => {
          console.log(data);
          alert('Successfully updated !!');
          this.router.navigate(['']);
        }, error => {
          console.log(error);
        })
    }

  }

  constructor(public http: HttpClient, public router: Router, public fb: FormBuilder) {
    this.signupform = this.fb.group({
      fullname: ['',],
      fathersname: ['',],
      course: ['',],
      gender: ['',],
      dob: ['',],
      qualification: ['',],
      experince: [''],
      joiningdate: ['',],
      address: this.fb.group({
        line: [''],
        line1: [''],
        country: [''],
        city: [''],
        state: [''],
        post_code: ['']
      }),
      reason: [''],
      mobile: ['', [Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', Validators.compose([

        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
    });
    this.addressform = this.fb.group({
      line: [''],
      line1: [''],
      country: [''],
      city: [''],
      state: [''],
      post_code: ['']

    });
  }
  selectFile(event: any) {
    this.readURL(event.target);
  }
  

readURL(input) {
    if (input.files && input.files[0]) {
      readBase64(input.files[0]).then((data: any) => {
        var backend = data;
        // var file_type: any;
        this.b64=data;

  
        data = data.split(';');
        // console.log(data)
        const data_type = data[0];
        var file_type = data[1];
        
        
        try {
          file_type = '.' + data_type.split('/')[1];
        } catch {
          file_type = '.' + data_type.split('/')[0];
        }
        data = data[1].split(',')[1];
      });
    }
  }
  uploadImage(){
    const httpOptions = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      })
    }

    this.http.post(this.url+'students/b64toimg',JSON.stringify({'image':this.b64}),httpOptions).subscribe(
    img=>{
      console.log(img)
    },
    error=>{
      console.log(error);
      
    }
    )
  }
  ngOnInit() {
    this.row_data = JSON.parse(localStorage.getItem("row_data"));
    if (this.row_data != null) {
      this.signupform.patchValue(this.row_data);

    }
  }

}