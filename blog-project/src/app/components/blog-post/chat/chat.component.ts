import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { BlogPostService } from 'src/app/shared/services/blog-post.service';
// import { ChatService } from 'src/app/shared/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message = '';
  messages: any[] = [];
  currentPost!: any;
  currentUser!: any;
  constructor(private authService: AuthService, private blogService: BlogPostService) { }
  userId = JSON.parse(localStorage.getItem('user')!).uid;

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('userData')!);
    this.currentPost = JSON.parse(localStorage.getItem('postElement')!)
    this.messages= JSON.parse(localStorage.getItem('postElement')!).messages;
  }

  sendMessage() {
    const messageObj = {
      message: this.message,
      userName: this.currentUser.displayName,
      postedTime: new Date().toString()
    }
    this.messages.push(messageObj);

    const editedPost = { ...this.currentPost, messages: this.messages };
    localStorage.setItem('postElement',JSON.stringify(editedPost))
    this.blogService.UpdatePost(this.currentPost.id, editedPost);
    this.messages=JSON.parse(localStorage.getItem('postElement')!).messages;
  }

}
