import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BlogPost } from 'src/app/models/blog-post';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private post = new BehaviorSubject<BlogPost>({});
  currentPost = this.post.asObservable();

  constructor() { }

  changePost(item: BlogPost) {
    this.post.next(item)
  }
}
