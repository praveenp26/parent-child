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
//   getData(val: any) {
//     this.CData = val;
// }
sendData(val: any) {
  this.pData = val;
}
}
