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
    //var c = angular.element( document.querySelector( '#some-id' ) );
    console.log("HEllo!");
    var ctx = (<HTMLCanvasElement>this.mainCanvas.nativeElement).getContext('2d');
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(250, 125);
    ctx.stroke();
  }
}
