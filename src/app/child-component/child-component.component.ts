import { Component, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css',
  inputs: ['pData'],
  outputs: ['childEvent']
})
export class ChildComponentComponent {
childEvent = new EventEmitter();
  sendData(val: any) {
    this.childEvent.emit(val);
}
 pData: any;

}
