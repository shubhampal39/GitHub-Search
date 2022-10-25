import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GithubService {
  constructor(private http: HttpClient) {}

  getGitHubProfile(username: any): Observable<any> {
    return this.http.get('https://api.github.com/users/' + username);
  }
}
