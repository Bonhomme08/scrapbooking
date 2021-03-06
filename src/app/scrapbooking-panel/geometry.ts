export class Rectangle {
    x:number = 0;
    y:number = 0;
    width:number = 0;
    height:number = 0;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

export class Point {
    x: number = 0;
    y: number = 0;

    constructor(x: number=0, y: number=0) {
        this.x = x;
        this.y = y;
    }
}