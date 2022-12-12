import { Injectable } from '@angular/core';
import { BlogPost } from '../../models/blog-post';
import { AngularFireDatabase, AngularFireList, AngularFireObject, } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  blogPostsRef!: AngularFireList<any>;
  blogPostRef!: AngularFireObject<any>;
  postRef!: AngularFirestoreCollection<BlogPost>;

  constructor(private db: AngularFireDatabase,
    private afs:AngularFirestore) {
    this.postRef=this.afs.collection<BlogPost>('posts');

   }

  AddPost(post: { title: string, content: string }, author: string, createdAt: Date) {
    const postForm: BlogPost = {
      title: post.title,
      content: post.content,
      author: author,
      published: createdAt
    }
    this.postRef.add(postForm).then(()=>{
      console.log('Successfully added post!');
    })


  }
  GetPost(id: string) { }
  GetPosts() { }
  UpdatePost(post: BlogPost) { }
  DeletePost(id: string) { }
}
