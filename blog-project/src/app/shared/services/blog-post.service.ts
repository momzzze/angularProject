import { Injectable } from '@angular/core';
import { BlogPost } from '../../models/blog-post';
import { AngularFireDatabase, AngularFireList, AngularFireObject, } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  blogPostsRef!: AngularFireList<any>;
  blogPostRef!: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  AddPost(post: BlogPost) {
    this.blogPostsRef.push({
      
    })
  }
  GetPost(id: string) { }
  GetPosts() { }
  UpdatePost(post: BlogPost) { }
  DeletePost(id: string) { }
}
