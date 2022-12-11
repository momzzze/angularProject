import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
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
    private fb: FormBuilder,
    ) { }

  ngOnInit(): void {
  }

  addPostHandle() {

  }
}
