import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogPost } from 'src/app/models/blog-post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  item: any;

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.item = JSON.parse(localStorage.getItem('postElement')!)
  }
  onClickBackHandler(){
    this.router.navigateByUrl(`/home`);
  }
}
