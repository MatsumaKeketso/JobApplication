import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class JobsServiceService {
  url = 'https://us-central1-mlab-challenge.cloudfunctions.net/jobs'
  searchUrl = 'https://us-central1-mlab-challenge.cloudfunctions.net/job?id'
  constructor(private http: HttpClient) { }

  getAllJobs() {
    return this.http.get(this.url)
  }
  getFilterdJob(searchId) {
    return this.http.get(`https://us-central1-mlab-challenge.cloudfunctions.net/job?id=${searchId}`)
  }
  getSearchedJob(desc) {
    return this.http.get(`https://us-central1-mlab-challenge.cloudfunctions.net/jobs?descriptions=${desc}`)
  }
}
