import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onCLickHandler() {
    window.location.href="https://github.com/momzzze";
  }
  onBackHandler(){
    this.router.navigate(['home']);
  }
}
