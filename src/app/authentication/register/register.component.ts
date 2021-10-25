import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormArray, FormControl,ValidationErrors, Validators, ValidatorFn} from '@angular/forms';
import { AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm :FormGroup;
  addressArray:any;
  emailPattern: RegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  passwordPattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  nospacePattern: RegExp = /^\S*$/;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
    name: ['',[Validators.required,Validators.minLength(5)]],
    email: ['',[Validators.required]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmpassword: ['', [Validators.required, this.confirmPassword()]],
    addressArray: this.fb.array([]),

    })
  }
  get registerFormControl(){
    return this.registerForm.controls;
  }

onSubmit(){
  //alert(this.registerForm.value);
  
}
addAddress() {
  this.addressArray = this.registerForm.get('addressArray') as FormArray;
  this.addressArray.push(this.fb.group({ street: [], city: [], country: [] }));
}
deleteAddress(i){
  this.addressArray = this.registerForm.get('addressArray') as FormArray;
  this.addressArray.removeAt(i);

}

confirmPassword(): ValidatorFn {
  return (controls: AbstractControl) => {
    const password = controls.value;
    const confirmPassword = controls.root.value.password;
    return password === confirmPassword ? null : { passwordNotMatch: true };
  };
}
}


