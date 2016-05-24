import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-detail',
  template: `
    <div *ngIf="user">
      <h2>User: <a href="{{user.html_url}}">{{user.login}}</a></h2>
      <h2>Repositories: </h2>
      <ul class="repos">
        <li *ngFor="let repo of repos">
          <a href="{{repo.html_url}}">{{repo.name}}</a>
        </li>
      </ul>  
    </div>
  `,
  styles: [`
    .repos {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 19em;
    }
    
    .repos li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .7em 0 0 1em;
      height: 1.6em;
      border-radius: 4px;
    }
    
    .repos li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .repos .text {
      position: relative;
      top: -3px;
    }
  `]
})
export class UserDetailComponent {
  @Input() 
  user: any;
  
  @Input() 
  repos: any;
}