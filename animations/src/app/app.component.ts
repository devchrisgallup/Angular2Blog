import { Component } from '@angular/core';
// anamations into component 
import { trigger, state, style, transition, animate } from '@angular/animations'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // add animations array here
  animations: [
    trigger('homeAnim', [
      // states to switch between
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.5)'
      })),
      // Direction, animate with druation and easing type
      transition('small <=> large', animate('300ms ease-in')),
    ]),
  ]
})
export class AppComponent {
  public title = 'Hover Over Me';
  // change attribute value of animation
  public state: string = 'small'; 

  stateAnim() {
    // ternary operator to
    // toggle between states
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  processData() {
    this.title = 'You have clicked me '
  }
}