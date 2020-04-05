import { Component,ViewChild  } from '@angular/core';
import {JobsServiceService} from '../services/jobs-service.service';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { AlertController, ToastController } from '@ionic/angular';
import { element } from 'protractor';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;
  url = 'https://us-central1-mlab-challenge.cloudfunctions.net/jobs'
  searchJobs:any = []
  jobList:any = []
  arr = [1,2,3,4,5,6,7,8,9,0]
  noresults = false
  searchBy = ''
  constructor(private splashScreen: SplashScreen,private js: JobsServiceService,private http: HttpClient,private router: Router, private alertCtrl: AlertController, private toastCtrl: ToastController) {}
  ngOnInit() {
    setTimeout(async () => {
      if (this.jobList.length == 0) {
        let toaster = await this.toastCtrl.create({
          message:"Something went wrong. I couldn't find any jobs, please check your internet connection.",
          duration: 3000
        })
        await toaster.present()
      }
    }, 30000);
        this.js.getAllJobs().subscribe(data => {
      this.jobList = data
       this.searchJobs = data

      console.log(this.jobList);

      this.splashScreen.hide();
    }, async err => {
      console.log(err.message);
      let toaster = await this.toastCtrl.create({
        message:"Something went wrong. I couldn't find any jobs, please check your internet connection.",
        duration: 3000
      })
      await toaster.present()
    })
  }
  viewJob(id) {
    console.log(id);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: id
      }
    };
    this.router.navigate(['viewjob'], navigationExtras);
  }
    getItems(ev: any) {
    // Reset items back to all of the items
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    console.log(val);
    if (val && val.trim() != "") {
      this.searchJobs = this.jobList.filter(item => {
        return item.description.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
      console.log('Results = ',this.searchJobs);
    } else if (val != " ") {
      this.searchJobs = this.jobList.filter(item => {
        return item.description.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    } else if (val == "") {
      this.searchJobs = this.jobList;

    }
  }
  async filter() {
    console.log(78);
    
    setTimeout(async () => {
      console.log('timed out');
      
      console.log(this.searchJobs);
      if (this.searchJobs.length == 0) {
        let toaster = await this.toastCtrl.create({
          message:"There are probably no jobs in this criteria.",
          duration: 3000
        })
        await toaster.present()
      }
    }, 10000);
    let alerter = await this.alertCtrl.create({
      header: 'Job Type',
      inputs: [
        {
          name: 'all',
          type: 'radio',
          label: 'All Jobs',
          value: 'all',
          checked: true
        },
        {
          name: 'part-time',
          type: 'radio',
          label: 'Part Time',
          value: 'part time',
          checked: false
        },
        {
          name: 'full-time',
          type: 'radio',
          label: 'Full Time',
          value: 'full time',
          checked: false
        },
        {
          name: 'contract',
          type: 'radio',
          label: 'Contract',
          value: 'contract',
          checked: false
        },
      ],
      buttons: [
        {
          text: 'Okay',
          handler: (data) => {
            console.log(data);
            this.searchJobs = []
            if (data == 'all') {
              this.searchJobs = this.jobList;
            } else {
              this.searchJobs = this.jobList.filter(item => {
                return item.type.toLowerCase().indexOf(data.toLowerCase()) > -1;
              });
            }
          }
        }
      ]
    })
    await alerter.present()
  }
  search() {
    if (this.searchBy) {
      setTimeout(async () => {
        if (this.jobList.length == 0) {
          let toaster = await this.toastCtrl.create({
            message:"Something went wrong. I couldn't find any jobs, please check your internet connection.",
            duration: 3000
          })
          await toaster.present()
        }
      }, 1500);
      this.searchJobs = []
      console.log(this.searchBy);
      this.js.getSearchedJob(this.searchBy).subscribe(data => {
       this.jobList = data
        this.searchJobs = data
    
       console.log(this.jobList);
    
       this.splashScreen.hide();
     }, async err => {
       console.log(err.message);
       let toaster = await this.toastCtrl.create({
         message:"Something went wrong. I couldn't find any jobs, please check your internet connection.",
         duration: 3000
       })
       await toaster.present()
     })
    }
  }
}
