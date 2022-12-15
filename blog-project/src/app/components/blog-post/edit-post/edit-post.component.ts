import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BlogPost } from 'src/app/models/blog-post';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BlogPostService } from 'src/app/shared/services/blog-post.service';
import { DataServiceService } from 'src/app/shared/services/data-service.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  item!: any;
  timeCreated: Date = new Date(Date.now());
  post!: BlogPost;
  form!: FormGroup;

  constructor(
    public authService: AuthService,
    public blogService: BlogPostService,
    public router: Router
  ) {

  }

  ngOnInit(): void {
    this.item = JSON.parse(localStorage.getItem('postElement')!)
    this.form = new FormGroup({
      title: new FormControl(`${this.item.title}`),
      content: new FormControl(`${this.item.content}`),
      imageUrl: new FormControl(`${this.item.imageUrl}`),
    });
  }

  editPostHandle() {
    const title = this.form.value.title!;
    const content = this.form.value.content!;
    const imageUrl = this.form.value.imageUrl!;
    const modified = this.timeCreated;
    const editedPost: BlogPost = {
      title,
      content,
      imageUrl,
      modified
    }
    localStorage.setItem('postElement', JSON.stringify(editedPost))
    this.blogService.UpdatePost(this.item.id, editedPost);
    this.router.navigate(['blog-list']);
  }
}
