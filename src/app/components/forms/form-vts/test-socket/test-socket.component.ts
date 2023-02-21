import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../../../shared/services/web-socket.service';
@Component({
  selector: 'app-test-socket',
  templateUrl: './test-socket.component.html',
  styleUrls: ['./test-socket.component.scss']
})
export class TestSocketComponent implements OnInit {

  constructor(private webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.webSocketService.listen('test event').subscribe((data:JSON) => {
      let AvlData=data;
      console.log(AvlData);
    });
  }
  
}
