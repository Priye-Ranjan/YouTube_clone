import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userFormGroup: any;
  constructor(private fb: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      email: this.fb.control('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
      ]),
      password: this.fb.control('', [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ]),
      confirmpass: this.fb.control('', Validators.required),
    });
  }
  submitForm() {
    console.log('User Registered!!');
    this.route.navigate(['']);
  }
}
