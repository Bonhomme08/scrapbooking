import { ScrapbookingCanvas } from './scrapbooking-canvas';

export class ScrapbookingDrawableCanvas extends ScrapbookingCanvas{
    constructor(canvas: HTMLCanvasElement) {
        super(canvas);

        canvas.addEventListener('click', this.onCanvasClick, false);
    }

    private onCanvasClick(event) {
        console.log(`event =  ${event.offsetX}, ${event.offsetY}`)
    }
}