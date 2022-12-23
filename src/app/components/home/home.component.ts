import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarkdownParserService } from 'src/app/shared/services/markdown-parser.service';
import { BlogPost } from 'src/app/models/blog-post';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BlogPostService } from 'src/app/shared/services/blog-post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogPosts!: any[];
  user?: any = JSON.parse(localStorage.getItem('user')!);
  constructor(
    public authService: AuthService,
    public blogService: BlogPostService,
    public mark: MarkdownParserService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('userData')!);
    this.retrievePosts();
    this.retrieveUsers();
  }


  onClickDetailsHandler(id: string, post: BlogPost) {
    localStorage.setItem('postElement', JSON.stringify(post));
    this.router.navigateByUrl(`post-detail/${id}`, { state: { data: post } });
  }

  retrievePosts() {
    this.blogService.GetPosts().subscribe(items => {
      this.blogPosts = items;
      this.blogPosts.forEach(e => {
        e.content = this.mark.markdownParser(e.content);
      });
      localStorage.setItem('listOfPosts', JSON.stringify(this.blogPosts))
    })

  }
  retrieveUsers() {
    this.authService.GetUsers().subscribe(items => {
      items.forEach(e => {
        if (e.uid === this.user.uid!) {
          this.user = e;
          localStorage.setItem('userData', JSON.stringify(this.user));
        }
      });
    });

  }
}
