import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appinfo } from './appinfo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { camelCase } from 'lodash';

const camelizeKeys: any = (obj: any) => {
  if (Array.isArray(obj)) {
    return obj.map(v => camelizeKeys(v));
  } else if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [camelCase(key)]: camelizeKeys(obj[key]),
      }),
      {},
    );
  }
  return obj;
};

@Injectable({
  providedIn: 'root'
})
export class AppinfoService {

  constructor(private http: HttpClient) { }
  appInfo: Array<AppinfoService> | AppinfoService[] = [];
  appResult: Array<any> | any[] = [];
  async getGitHubInfo(username: string) {
    console.log("HENLO TRYING TO HIT API...." + username);
    let apiUrl = `https://api.github.com/users/${username}/repos`;
    console.log(apiUrl);
    const response = await fetch(apiUrl);
    console.log("AWAIT")
    const json = await response.json();
    console.log(json)
    for(var i = 0; i < json.length; i++){
      this.appResult.push(json[i]['html_url'])
    }
    console.log(this.appResult)
    return this.appResult;
    // return this.http.get(apiUrl).pipe(
    //   map((res: any) => {
    //     return(res.json().map(item => {
    //       return new Appinfo(item);
    //     }))
    //   })
    // );
    // return this.http.get(apiUrl).pipe(
    //   map((res: any) => {
    //     console.log(res)
    //     return res
    //   })
    // )

    // return this.http.get('https://api.github.com/users/bengeh/repos')
    // .pipe(map((res: any) => res.json()));
  }

}
