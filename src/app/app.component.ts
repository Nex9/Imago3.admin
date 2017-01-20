import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count: number;
  inProgress: boolean;

  constructor (private http: Http) {}

  ngOnInit() {
    this.inProgress = true;
    this.http.get('/api/count')
      .subscribe(res => {
        this.count = res.json();
        this.inProgress = false;
      });
  }

  incrementCounter() {
    this.inProgress = true;
    this.http.get('/api/count/increment')
      .subscribe(res => {
        this.count = res.json();
        this.inProgress = false;
      });
  }

  resetCounter() {
    this.inProgress = true;
    this.http.get('/api/count/reset')
      .subscribe(res => {
        this.count = res.json();
        this.inProgress = false;
      });
  }
}
