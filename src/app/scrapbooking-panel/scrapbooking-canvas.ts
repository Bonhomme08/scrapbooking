export class ScrapbookingCanvas {
    DOTS_QUANTITY = {x:16, y:8};
    PAGE_OFFSET_PERCENTAGE = {x: 0.05, y: 0.05};

    _calculated_page_offset = {x: 0, y: 0};
    _calculated_dots_range = {x: 0, y: 0};

    _canvas: HTMLCanvasElement;
    _canvasContext: CanvasRenderingContext2D;


    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this._canvasContext = canvas.getContext('2d');

        this.precalculate();
        this.drawDots();
    }

    private precalculate() {
        this._calculated_page_offset.x = this._canvas.width * this.PAGE_OFFSET_PERCENTAGE.x;
        this._calculated_page_offset.y = this._canvas.height * this.PAGE_OFFSET_PERCENTAGE.y;

        this._calculated_dots_range.x = (this._canvas.width - (this._calculated_page_offset.x * 2)) / (this.DOTS_QUANTITY.x - 1);
        this._calculated_dots_range.y = (this._canvas.height - (this._calculated_page_offset.y * 2)) / (this.DOTS_QUANTITY.y - 1);
    }

    private drawDots() {
        for (var y:number = 0; y < this.DOTS_QUANTITY.y; y++) {
            for (var x:number = 0; x < this.DOTS_QUANTITY.x; x++) {
                this.drawDot(x, y);
            }
        }
    }

    private drawDot(x: number, y: number) {
        this._canvasContext.beginPath();
        this._canvasContext.arc(
            this._calculated_page_offset.x + x * this._calculated_dots_range.x,
            this._calculated_page_offset.y + y * this._calculated_dots_range.y,
            1,
            0,
            2 * Math.PI
        );
        this._canvasContext.stroke();
    }

    private drawRectangle() {

    }
}