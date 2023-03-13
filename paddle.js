class Paddle {
    constructor(game, x, y) {
        this.game = game;

        this.x = x;
        this.y = y;

        this.width = 64;
        this.height = 8;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/PaddleMedium.png");

        this.updateBB();
    }

    updateBB() {
        this.BB = new BoundingBox(this.x, this.y, this.width, this.height);
    }

    update() {
        this.updateBB();
    }

    draw(ctx) {
        if (this.game.mouse) {
            var mouse = this.game.mouse;

            this.x = Math.floor(mouse.x);
            if (this.x > params.CANVAS_WIDTH - this.width) {
                this.x = params.CANVAS_WIDTH - this.width;
            }

            ctx.drawImage(this.spritesheet, 1, 1, 16, 2, this.x, this.y, this.width, this.height);
        }
    }
}