import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterServiceService } from '../Services/register-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Loginform : FormGroup;
  respData: any;
  constructor( private fb : FormBuilder , private registerservice : RegisterServiceService, private router:Router ) {
    this.Loginform =this.fb.group({
      email:new FormControl('',[Validators.required , Validators.minLength(3)]),
      password:new FormControl('', [Validators.required,Validators.pattern(/^(?=.\d)(?=.[!@#$%^&])(?=.[a-z])(?=.*[A-Z]).{8,}$/)]),
    });
  }
  get email(){
    return this.Loginform.get('email');  
  }
  get password(){
    return this.Loginform.get('password');  
  }
  onSubmit(){
    let login = {
      email: this.Loginform.value.email,
      password: this.Loginform.value.password
    }
    console.log(login)
    this.registerservice.checkLogin(login).subscribe({
      next:
       response => {
      
        console.log(response)
        this.respData=response;
        localStorage.setItem("Token",this.respData.Token);
        localStorage.setItem("userEmail",this.respData.userEmail);
        localStorage.setItem("userRole",this.respData.userRole);

          console.log(this.respData.Token);
      
        alert("Your Login successfull..!");

        if(this.respData.userRole=="Role_User")
        {
          this.router.navigateByUrl('/displaysounds')
        }
        else
        {
          this.router.navigateByUrl('/adminsongs');

        }
        
      },
      error: err => {
        alert("Invalid Email or password");
      }


    })
  }
  
  }
