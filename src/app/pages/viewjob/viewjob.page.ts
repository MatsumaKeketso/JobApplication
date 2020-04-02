import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsServiceService } from 'src/app/services/jobs-service.service';

@Component({
  selector: 'app-viewjob',
  templateUrl: './viewjob.page.html',
  styleUrls: ['./viewjob.page.scss'],
})
export class ViewjobPage implements OnInit {
  jobDetails = {}
  constructor(private route: ActivatedRoute, private router: Router,private js: 
    JobsServiceService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params.special);
      this.js.getFilterdJob(params.special).subscribe(data => {
        console.log(data);
       this.jobDetails = data
      }, err => {
        console.log(err);
      })
    });
  }
  openInNewTab(url) {
    let win = window.open(url, '_blank');
    win.focus();
  }
  back() {
    this.router.navigateByUrl('home')
    this.jobDetails = {}
  }
}
