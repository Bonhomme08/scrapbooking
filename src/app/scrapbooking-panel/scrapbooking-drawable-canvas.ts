import { ScrapbookingCanvas } from './scrapbooking-canvas';

export class ScrapbookingDrawableCanvas extends ScrapbookingCanvas{
    _mouseDown: boolean = false;
    _click_location = {x:0, y:0};

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);

        canvas.onmousedown = this.onMouseDown;
        canvas.onmouseup = this.onMouseUp;
        canvas.onmousemove = this.onMouseMove;
    }

    private onMouseDown(event) {
        console.log(`onMouseDown = ${this._mouseDown}`);
        this._click_location.x = event.offsetX;
        this._click_location.y = event.offsetY;

        this._mouseDown = true;
    }

    private onMouseUp(event) {
        this._mouseDown = false;
    }

    private onMouseMove(event) {
        if (!this._mouseDown) { return; }
        console.log(`onMouseMove`);
        return;

        this.drawRectangle(
            this._click_location.x,
            this._click_location.y,
            event.offsetX - this._click_location.x,
            event.offsetY - this._click_location.y
        );
    }
}