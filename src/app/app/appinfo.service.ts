import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appinfo, GitHubInfo } from './appinfo';
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
  gitHubInfo: GitHubInfo | null = null;
  appInfo: Array<Appinfo> | Appinfo[] = [];
  yearMap: Map<number, number> = new Map<number, number>();
  

  async getGitHubInfo(username :string){
    let apiUrl = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log("HENLO JSON ", json)
    this.gitHubInfo = new GitHubInfo(camelizeKeys(json))



    console.log(this.gitHubInfo)
    for(var i = 0; i < json.length; i++){
      var curDate = new Date(this.gitHubInfo[i]['createdAt']).getFullYear();
      console.log(curDate)
      if(!this.yearMap.has(curDate)){
        this.yearMap.set(curDate, 1)
      }else{
        this.yearMap.set(curDate, this.yearMap.get(curDate) + 1)
      }
      
      this.appInfo.push({
        id: this.gitHubInfo[i]['id'],
        fullName: this.gitHubInfo[i]['fullName'],
        htmlUrl: this.gitHubInfo[i]['htmlUrl'],
        createdAt: new Date(this.gitHubInfo[i]['createdAt'])
      })
    }
    console.log(this.appInfo)
    console.log("new map....", this.yearMap)
    return this.appInfo
  }
}

