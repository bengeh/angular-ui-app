import { Component } from '@angular/core';
import { Appinfo } from './app/appinfo';
import { AppinfoService } from './app/appinfo.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  public results: Observable<Array<Appinfo>>;
  public graphData: Map<number, number> = new Map<number, number>();
  public loading: boolean = false;
  public showText: boolean = false;
  public searchField: FormControl;

  constructor(private router: Router, private appInfoService: AppinfoService) {}

  ngOnInit() {
    this.searchField = new FormControl();
    console.log("NG ON INIT....")
    
    this.results = this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(_ => (this.loading = true)),
      switchMap(term => this.appInfoService.getGitHubInfo(term)),
      tap(_ => (this.loading = false,
                this.showText = true))
    );
    console.log("HENLOOOOO" , this.appInfoService.yearMap) 
    this.graphData = this.appInfoService.yearMap
  }
  

sendMessageto2() {
    this.router.navigate(['/bar-chart'], { state: this.graphData });
  }
}
