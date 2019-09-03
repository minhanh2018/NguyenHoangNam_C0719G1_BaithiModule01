let Rectangle = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.ctx = document.getElementById('rectangle').getContext('2d');

    this.putColorInRectangle = function () {
        this.ctx.fillStyle = '#000000';
    }

    this.render = function () {
        this.putColorInRectangle();
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

let rectangle = new Rectangle(10, 10, 200, 100);
rectangle.render();