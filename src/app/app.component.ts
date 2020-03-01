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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  public results: Observable<Array<Appinfo>>;
  public loading: boolean = false;
  public searchField: FormControl;

  constructor(private appInfoService: AppinfoService) {}

  ngOnInit() {
    this.searchField = new FormControl();
    console.log("NG ON INIT....")

    this.results = this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(_ => (this.loading = true)),
      switchMap(term => this.appInfoService.getGitHubInfo(term)),
      tap(_ => (this.loading = false))
    );
  }
  doSearch(term: string) {
    this.appInfoService.getGitHubInfo(term);
  }

}
