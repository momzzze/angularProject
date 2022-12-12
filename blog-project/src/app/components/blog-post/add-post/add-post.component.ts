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


  form = this.fb.group({
    title: ['', [Validators.required]],
    content: ['', [Validators.required]],
  })


  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    public blogService: BlogPostService
  ) { }

  ngOnInit(): void {
  }

  addPostHandle() {
    const title = this.form.value.title!;
    const content = this.form.value.content!;

    this.blogService.AddPost({ title, content }, this.authorId!, this.timeCreated)
    // console.log(JSON.parse(localStorage['user']).uid)
    // console.log(this.timeCreated);
    // console.log(this.form.value);



  }
}
