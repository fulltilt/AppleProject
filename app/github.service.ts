import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  constructor(private http:Http) { }
  
  getUserInfo(username:string) {
    let url = 'https://api.github.com/users/' + username;
    
    return this.http.get(url)
               .map(response => JSON.parse(response._body));
  }
  
  getUserRepos(username:string) {
    let url = 'https://api.github.com/users/' + username + '/repos';
    
    return this.http.get(url)
               .map(response => JSON.parse(response._body));
  }
}