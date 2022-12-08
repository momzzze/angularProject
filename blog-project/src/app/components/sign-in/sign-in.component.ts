import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { sameValueGroupValidator } from 'src/app/shared/validators/match-password-validator';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form = this.fb.group({
    email: ['', [Validators.required]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      // rePassword: ['', [Validators.required]]
    },
    //  {
    //   validators: [sameValueGroupValidator("password", "rePassword")]
    // }
    )
  })

  constructor(
    public authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }


  handleLoginFormSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    const value: { userName: string, password: string } = {
      userName: this.form.value.email!,
      password: this.form.value.pass?.password!
    };
    console.log(value);

    this.authService.SignIn(value.userName, value.password);
  }
}
