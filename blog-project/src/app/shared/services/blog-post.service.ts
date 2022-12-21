import { Injectable } from '@angular/core';
import { BlogPost } from '../../models/blog-post';
import { AngularFireDatabase, AngularFireList, AngularFireObject, } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { query } from '@angular/animations';
import { collectionData, Firestore, doc } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  blogPostsRef!: AngularFireList<any>;
  blogPostRef!: AngularFireObject<any>;
  postRef!: AngularFirestoreCollection<any>;
  items!: Observable<any[]>;
  item!: Observable<any>;
  // authorId?: string = JSON.parse(localStorage['user']).uid;

  constructor(
    private afs: AngularFirestore,
    public router: Router
  ) {
    this.postRef = this.afs.collection<any>('posts');
    this.items = this.afs.collection('posts').valueChanges({ idField: 'id' });

  }

  AddPost(post: { title: string, content: string, imageUrl: string }, author: string, createdAt: Date, authorName: string) {
    console.log(authorName);

    const postForm: BlogPost = {
      title: post.title,
      content: post.content,
      author: author,
      published: createdAt,
      modified: createdAt,
      imageUrl: post.imageUrl,
      authorName:authorName
    }
    this.postRef.add(postForm).then(() => {
      this.router.navigate(['home']);
    })
  }

  // GetPost(id?: string) {
  //   this.item = this.afs.doc(`posts/${id}`).get();
  //   return this.item;
  // }

  GetPosts() {
    return this.afs.collection<BlogPost>('posts')
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const data = action.payload.doc.data() as BlogPost
            return {
              title: data.title,
              content: data.content,
              imageUrl: data.imageUrl,
              author: data.author,
              published: data.published,
              modified: data.modified,
              id: action.payload.doc.id
            }
          })
        })
      )
  }

  UpdatePost(id: string, post: BlogPost) {
    this.afs.doc<BlogPost>('posts/' + id)
      .update(post);
  }
  DeletePost(id: string) {
    this.afs.doc<BlogPost>('posts/' + id)
      .delete();
  }
}


