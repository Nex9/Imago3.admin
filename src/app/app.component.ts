import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count: number;

  constructor (private http: Http) {}

  ngOnInit() {
    this.http.get('/api/count')
      .subscribe(res => {
        this.count = res.json();
      });
  }

  incrementCounter() {
    this.http.get('/api/count/increment')
      .subscribe(res => {
        this.count = res.json();
      });
  }
}
