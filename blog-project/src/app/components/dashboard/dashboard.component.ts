import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  form!: FormGroup;
  user: any=JSON.parse(localStorage.getItem('user')!);
  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userData')!);
    this.retrievePosts();
    this.form = new FormGroup({
      email: new FormControl(`${this.user.email}`),
      displayName: new FormControl(`${this.user.displayName}`),
      photoURL: new FormControl(`${this.user.photoURL}`),
      phoneNumber: new FormControl(`${this.user.phoneNumber}`),
    });
  }

  retrievePosts() {
    this.authService.GetUsers().subscribe(items => {
      items.forEach(e => {
        if (e.uid === this.user.uid) {
          this.user=e;
          localStorage.setItem('userData', JSON.stringify(this.user));
        }
      });
    });

  }

  editUserHandler() {
    const photoURL = this.form.value.photoURL;
    const phoneNumber = this.form.value.phoneNumber;
    const displayName = this.form.value.displayName;
    const email = this.form.value.email;
    const editedUser = {
      email, phoneNumber, displayName, photoURL
    }
    this.user.email = email;
    this.user.phoneNumber = phoneNumber;
    this.user.photoURL = photoURL;
    this.user.displayName = displayName;
    localStorage.setItem('user', JSON.stringify(this.user))
    this.authService.UpdateUser(this.user.uid, editedUser);
    this.router.navigateByUrl(`dashboard`);

  }
}
