import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';
import { AuthService } from 'src/app/shared/services/auth.service';
import { appEmailValidator, sameValueGroupValidator } from 'src/app/shared/validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form = this.fb.group({
    email: ['', [Validators.required]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      rePassword: ['', [Validators.required]]
    }, {
      validators: [sameValueGroupValidator("password", "rePassword")]
    })
  })

  constructor(
    public authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  handleFormSubmit(): void {

    if (this.form.invalid) {
      return;
    }
    const value: { userName: string, password: string } = {
      userName: this.form.value.email!,
      password: this.form.value.pass?.password!
    };

    this.authService.SignUp(value.userName, value.password);
  }
}
