export interface BlogPost {
  uid?: string,
  title?: string,
  content?: string,
  author?: string,
  published?: Date,
  modified?: Date,
  imageUrl?:string,
  authorName?:string,
  messages?:{}
}
