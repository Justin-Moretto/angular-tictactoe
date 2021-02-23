import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button *ngIf="!value">{{ value }}</button>
    <button *ngIf="value == 'X'">{{ value }}</button>
    <button *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: [
  ]
})
export class SquareComponent {

  @Input() value: 'X' | 'O' | null;

}
