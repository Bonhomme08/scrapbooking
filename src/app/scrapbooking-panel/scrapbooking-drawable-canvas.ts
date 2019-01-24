import { Rectangle, Point } from './geometry';
import { ScrapbookingCanvas } from './scrapbooking-canvas';

export class ScrapbookingDrawableCanvas extends ScrapbookingCanvas{
    _mouseDown: boolean = false;
    _click_location: Point = new Point();

    constructor(canvas: HTMLCanvasElement) {
        super(canvas);

        canvas.onmousedown = this.onMouseDown.bind(this);
        canvas.onmouseup = this.onMouseUp.bind(this);
        canvas.onmousemove = this.onMouseMove.bind(this);
    }

    private onMouseDown(event) {
        this._click_location.x = event.offsetX;
        this._click_location.y = event.offsetY;

        this._mouseDown = true;
    }

    private onMouseUp(event) {
        this.addSavedRectangle(
            this._click_location.x,
            this._click_location.y,
            event.offsetX - this._click_location.x,
            event.offsetY - this._click_location.y
        );

        this._mouseDown = false;
    }

    private onMouseMove(event) {
        if (!this._mouseDown) { return; }

        this.drawRectangleTemp(
            this._click_location.x,
            this._click_location.y,
            event.offsetX - this._click_location.x,
            event.offsetY - this._click_location.y
        );
    }

    private addSavedRectangle(x: number, y: number, width: number, height: number) {
        this._rectangleList.push(new Rectangle(x, y, width, height));
    }
}