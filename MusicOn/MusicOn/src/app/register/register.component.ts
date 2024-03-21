import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterServiceService } from '../Services/register-service.service';
import { User } from '../Services/model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  Registerform : FormGroup;
  constructor( private fb : FormBuilder , private rq: RegisterServiceService , private router : Router ) {

    this.Registerform =this.fb.group({
      firstname:new FormControl('', [Validators.required]),
      lastname:new FormControl('', [Validators.required]),
      phno:new FormControl('', [Validators.required]),
      email:new FormControl('',[Validators.required , Validators.minLength(3)]),
      password:new FormControl('', [Validators.required,Validators.pattern(/^(?=.\d)(?=.[!@#$%^&])(?=.[a-z])(?=.*[A-Z]).{8,}$/)]),

    });
  }
  get firstname(){
    return this.Registerform.get('firstname');  
  }
  get lastname(){
    return this.Registerform.get('lastname');  
  }
  get phno(){
    return this.Registerform.get('phno');  
  }
  get email(){
    return this.Registerform.get('email');  
  }
  get password(){
    return this.Registerform.get('password');  
  }
  onSubmit(){
    // let login = {
    //   firstname: this.Registerform.value.firstname,
    //   lastname: this.Registerform.value.lastname,
    //   phno: this.Registerform.value.phno,
    //   email: this.Registerform.value.email,
    //   password: this.Registerform.value.password
    console.log("regist");
  
  let user : User = this.Registerform.value;
   console.log(user);
   console.log(this.Registerform.value);
   this.rq.register(user).subscribe(
    {
   next:(data)=>{

    alert("registered successfully..!")
    this.router.navigate(["login"]);
 
     },
     error:(error)=>{
       alert("data not submitted");
       
     }

   });
  }
}

