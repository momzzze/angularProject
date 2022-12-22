## deployed at https://blod-angular-project.web.app/blog-list

## used DB and auth scheme are from google/firestore used with angular/fire  also deployed with google/firebase


## Public Part:
user should see home component, about component, login and register component
in home component will be listed all Blog posts and anonymous user can see all messages from the comentating system


## Private Part:
### users can: 
  create posts create post
  update their own posts Blog posts component
  delete their own posts Blog posts component 
  comentate on all posts home component
  update user data in dashboard

## there are auth validations for login and register also for create post

## also I have used angular/material and some fxflex to visualize simple html/css
  all components have separate css files where is needed


 ## posible updates for which I had no time:
    pagination in home & blog posts components
    search engine for posts


# BlogProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
