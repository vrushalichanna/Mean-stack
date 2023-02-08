import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Post } from "./post.model";

const BACKEND_URL = environment.apiUrl + "/posts/";

@Injectable()
export class PostDataService extends DefaultDataService<Post> {

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Post', http, httpUrlGenerator);
  }

  getAll(): Observable<Post[]> {
    return this.http
      .get(BACKEND_URL)
      .pipe(
        map((data) => {
          const posts: Post[] = [];
          // for (let key in data) {
          //   posts.push({ ...data[key], id: key });
          // }
          return posts;
        })
      );
  }

  delete(postId: string): Observable<string> {
    return this.http
    .delete(BACKEND_URL + postId)
      .pipe(
        map((data) => {
          return postId;
        })
      );
  }

}
