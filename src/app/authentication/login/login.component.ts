import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailPattern: RegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  passwordPattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmitTemplateBased(formValue){
    window.localStorage.setItem('user', JSON.stringify(formValue));
    alert("E-mail: " + formValue.email + "\nPassword: " + formValue.password);
  }

  
}