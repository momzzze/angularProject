import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData = JSON.parse(localStorage['user'])
  menuItems = [
    { linkId: 1, linkName: 'Home', linkUrl: 'home' },
    { linkId: 2, linkName: 'Login', linkUrl: 'sign-in' },
    { linkId: 3, linkName: 'Register', linkUrl: 'sign-up' },
    { linkId: 4, linkName: 'Logout', linkUrl: 'logout' },
    { linkId: 5, linkName: 'Blog Posts', linkUrl: 'blog-list' },
    { linkId: 6, linkName: 'Create Post', linkUrl: 'create-post' },
    { linkId: 7, linkName: 'Dashboard', linkUrl: 'dashboard' },
  ];

  constructor(
    public authService: AuthService, public router:Router
  ) {
  }


  ngOnInit(): void {
    // console.log(this.userData);
  }
  onClickDashhandler(){
    this.router.navigate(['dashboard'],JSON.parse(localStorage.getItem('user')!));
  }
}
