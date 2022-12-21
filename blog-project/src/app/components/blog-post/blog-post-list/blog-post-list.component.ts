import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { BlogPost } from 'src/app/models/blog-post';
import { BlogPostService } from 'src/app/shared/services/blog-post.service';
import { DataServiceService } from 'src/app/shared/services/data-service.service';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css']
})
export class BlogPostListComponent implements OnInit {
  postsData: any[] = [];
  post!: BlogPost;
  userId?: string = JSON.parse(localStorage['user']).uid;

  constructor(
    private blogService: BlogPostService,
    private router: Router,
    private dataService: DataServiceService
  ) { }

  ngOnInit(): void {
    this.postsData = [];
    localStorage.setItem('listOfPosts', JSON.stringify(this.postsData))
    this.dataService.currentPost.subscribe(post => this.post = post);
    this.retrievePosts();
    console.log(this.userId);

  }
  retrievePosts() {
    this.blogService.GetPosts().subscribe(items => {
      items.forEach(e => {
        if (e.author === this.userId) {
          this.postsData.push(e);
          localStorage.setItem('listOfPosts', JSON.stringify(this.postsData))
        }
      });
    })
  }

  onClickEdit(id: string, post: BlogPost) {
    localStorage.setItem('postElement', JSON.stringify(post));
    this.router.navigateByUrl(`blog-post-edit/${id}`, { state: { data: post } });
  }

  onClickDelete(id: string) {
    this.blogService.DeletePost(id);
    this.router.navigate(['home']);
  }
}
