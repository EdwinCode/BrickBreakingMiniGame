class Ball {
    constructor(game) {
        this.game = game;
        this.radius = 4;

        // offsets used to help track top left of ball
        this.xOffset = this.radius;
        this.yOffset = (2 * this.radius);

        // x, y will track top left of the ball
        this.x = (params.CANVAS_WIDTH / 2) - this.xOffset;
        this.y = (params.CANVAS_HEIGHT) - this.yOffset;

        this.xSpeed = 120;
        this.ySpeed = 120;

        this.updateBB()
    }

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x, this.y, 2 * this.radius, 2 * this.radius);
    }

    update() {
        this.x += this.xSpeed * this.game.clockTick;
        this.y -= this.ySpeed * this.game.clockTick;
        this.updateBB();

        if (this.BB.right >= this.game.area.right) {
            this.xSpeed = -this.xSpeed;
        } else if (this.BB.left <= this.game.area.left) {
            this.xSpeed = -this.xSpeed;
        } else if (this.BB.top <= this.game.area.top) {
            this.ySpeed = -this.ySpeed;
        } else if (this.BB.bottom >= this.game.area.bottom) {
            this.ySpeed = -this.ySpeed;
        }

        var that = this;
        this.game.entities.forEach(function (entity) {
            if (entity.BB && that.BB.collide(entity.BB)) {
                if (entity instanceof Brick) {
                    entity.removeFromWorld = true;

                    if (that.lastBB.bottom <= entity.BB.top || that.lastBB.top >= entity.BB.bottom) { // ball was above or below
                        that.ySpeed = -that.ySpeed;
                    } else if (that.lastBB.right <= entity.BB.left || that.lastBB.left >= entity.BB.right) { // ball was to the right or left
                        that.xSpeed = -that.xSpeed;
                    }
                }

                if (entity instanceof Paddle) {
                    if (that.lastBB.bottom <= entity.BB.top) {
                        that.ySpeed = -that.ySpeed;
                    } else if (that.lastBB.right <= entity.BB.left || that.lastBB.left >= entity.BB.right) { // ball was to the right or left
                        that.xSpeed = -that.xSpeed;
                    }
                }
            }
        });
    }

    draw(ctx) {
        ctx.fillStyle = "Grey";
        ctx.strokeStyle = "Grey";

        ctx.beginPath();
        ctx.arc(this.x + this.radius, this.y + this.radius, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}