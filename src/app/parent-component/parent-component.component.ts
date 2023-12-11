import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-component',
  standalone: true,
  imports: [ChildComponentComponent],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css',
})
export class ParentComponentComponent {

  CData: any;
  pData: any;
  pData2: any;
//   getData(val: any) {
//     this.CData = val;
// }
sendData(val: any) {
  this.pData = val;
}
  sendData2(val1: string,val2: string) {
    this.pData = val1;
    this.pData2 = val2;
  }
}
