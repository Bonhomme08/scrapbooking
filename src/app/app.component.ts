import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('mainCanvas') mainCanvas: ElementRef;
  title = 'scrap-booking';

  protected ngOnInit() {
    //
  }
}
