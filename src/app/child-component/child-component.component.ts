import { Component, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css',
  // inputs: ['pData', 'pData2'],
  inputs: ['pData'],
 // outputs: ['childEvent']
})
export class ChildComponentComponent {
  inputCollection: string[] = [];
  // childEvent = new EventEmitter();
  // sendData(val: any) {
  //   this.childEvent.emit(val);
  // }
  pData: any;
  // pData2: any;
  
}
