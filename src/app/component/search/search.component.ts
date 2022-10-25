import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { User } from '../../models/user';
import { DataService } from '../../services/data.service';
import { GithubService } from '../../services/github.service';
// import { Observable } from "rxjs/Observable"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  myForm!: FormGroup;
  userName: string = '';
  destroyed: Subject<boolean> = new Subject<boolean>();
  currentItem: User;
  isUser: boolean = true;
  constructor(
    public formBuilder: FormBuilder,
    private githubService: GithubService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(''),
    });

    this.bindFields();
  }
  bindFields() {
    this.myForm
      .get('name')
      .valueChanges.pipe(takeUntil(this.destroyed))
      .subscribe((userName) => {
        this.userName = userName;
      });
  }

  submitForm() {
    this.githubService
      .getGitHubProfile(this.userName)
      .pipe(takeUntil(this.destroyed))
      .subscribe(
        (result) => {
          const userData = new User(
            result.name,
            result.following,
            result.followers,
            result.public_repos,
            result.html_url,
            result.location,
            result.avatar_url
          );
          this.isUser = true;
          this.currentItem = userData;
          this.dataService.insertUserList(userData);
        },
        (error) => {
          this.isUser = false;
          this.currentItem = null;
          const userData = new User(this.userName);
          this.dataService.insertUserList(userData);
        }
      );
  }
}
