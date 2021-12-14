import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: `
  <div style="border: blue solid 1px">
    <p>Data from Parent: {{dataFromParent}}</p>
    <input [(ngModel)]="input" [value]="input" (keydown.enter)="send()">
  </div>
  `,
  styles: [
  ]
})
export class SampleComponent implements OnInit, OnChanges {

  @Input() dataFromParent: string = "";
  @Output() emitDataToParent = new EventEmitter<string>();
  input: string = "";
  ifLoaded: boolean = false;

  constructor() { }

  ngOnChanges() {
    console.log("ngOnChanges " + this.dataFromParent);
  }

  ngOnInit(): void {
    console.log("ngOnInit " + this.dataFromParent);
  }

  send() {
    this.emitDataToParent.emit(this.input)
    this.input = '';
  }

}
