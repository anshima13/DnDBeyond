import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DnDBeyond';
  points = 0;
  increment(){
    if(this.points<6)
   this.points++;
    console.log(this.points);
}
decrement() {
  if(this.points>0)
   this.points--;
  return false;
}
}
