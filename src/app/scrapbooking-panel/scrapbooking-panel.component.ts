import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ScrapbookingDrawableCanvas } from './scrapbooking-drawable-canvas';

@Component({
  selector: 'app-scrapbooking-panel',
  templateUrl: './scrapbooking-panel.component.html',
  styleUrls: ['./scrapbooking-panel.component.scss']
})
export class ScrapbookingPanelComponent implements OnInit {
  @ViewChild('mainCanvas') mainCanvas: ElementRef;

  constructor() { }

  ngOnInit() {
    var canvas: ScrapbookingDrawableCanvas = new ScrapbookingDrawableCanvas(this.mainCanvas.nativeElement);
  }

}
