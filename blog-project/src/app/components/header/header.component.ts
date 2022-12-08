import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems = [
    { linkId: 1, linkName: 'Home', linkUrl: 'home' },
    { linkId: 2, linkName: 'Login', linkUrl: 'sign-in' },
    { linkId: 3, linkName: 'Register', linkUrl: 'sign-up' },
    { linkId: 4, linkName: 'Logout', linkUrl: 'logout' },
  ];

  constructor(
    public authService: AuthService
  ) { }
  ngOnInit(): void {
  }

}
