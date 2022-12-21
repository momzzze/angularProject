import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BlogPostService } from 'src/app/shared/services/blog-post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  authorId?: string = JSON.parse(localStorage['user']).uid;
  timeCreated: Date = new Date(Date.now());
  authorName: string=JSON.parse(localStorage['userData']).displayName

  form = this.fb.group({
    title: ['', [Validators.required]],
    content: ['', [Validators.required]],
    imageUrl:['']
  })


  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    public blogService: BlogPostService
  ) { }

  ngOnInit(): void {
    // this.authorName=localStorage['user'].displayName;
  }

  addPostHandle() {
    const title = this.form.value.title!;
    const content = this.form.value.content!;
    const imageUrl=this.form.value.imageUrl!;


     this.blogService.AddPost({ title, content,imageUrl }, this.authorId!, this.timeCreated,this.authorName!)
  }
}
