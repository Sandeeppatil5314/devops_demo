import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {io} from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor() { 
    this.socket =io(this.uri,{ secure: true});
  }
  readonly uri: string = 'wss://devsap.gwclogistics.com:4041';
  socket: any;

  listen(eventName: string){
    return new Observable((subscriber)=> {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      })
      // this.socket.emit('data','data from frondend');
    });
  }
}
