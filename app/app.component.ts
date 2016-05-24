import {Component, OnInit} from '@angular/core';
import {UserDetailComponent} from './user-detail.component';
import {GithubService} from './github.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>Github User App</h1>

        <div>
            <label>Github Username: </label>
            <input [(ngModel)]="name" (keypress)="processKey($event.keyCode)" placeholder="username">
            <button (click)="search()">Search</button>
        </div>
        <user-detail [user]="userInfo" [repos]="userRepos"></user-detail>
    `,
    directives: [UserDetailComponent],
    providers: [GithubService]
})

export class AppComponent implements OnInit { 
    name:string = 'fulltilt';
    userInfo:any;
    userRepos:any;
    
    constructor(private githubService:GithubService) { }
    
    ngOnInit() {
        this.search();    
    }
    
    processKey(keyCode:number) {
        if (keyCode === 13) {
            this.search();   
        }
    }
    
    search() {
        this.githubService.getUserInfo(this.name)
            .subscribe(user => this.userInfo = user);
            
        this.githubService.getUserRepos(this.name)
            .subscribe(user => this.userRepos = user);
    }
}
