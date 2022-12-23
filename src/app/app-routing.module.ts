import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { AppModule } from './app.module';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AddPostComponent } from './components/blog-post/add-post/add-post.component';
import { BlogPostComponent } from './components/blog-post/blog-post/blog-post.component';
import { BlogPostListComponent } from './components/blog-post/blog-post-list/blog-post-list.component';
import { EditPostComponent } from './components/blog-post/edit-post/edit-post.component';
import { PostDetailsComponent } from './components/blog-post/post-details/post-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'create-post', component: AddPostComponent },
  { path: 'blog-post', component: BlogPostComponent },
  { path: 'blog-list', component: BlogPostListComponent,canActivate: [AuthGuard] },
  { path: 'blog-post-edit/:id', component: EditPostComponent },
  { path: 'post-detail/:id', component: PostDetailsComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
