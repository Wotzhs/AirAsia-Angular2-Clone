import {Injectable} from '@angular/core';

@Injectable()
export class HttpService{
  httpGetData: string;

  setHttpGetData(data:string){
    this.httpGetData = data;
    console.log(this.httpGetData)
  }
}
