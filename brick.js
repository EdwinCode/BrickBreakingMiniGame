class Brick {
    constructor(game, color, x, y) {
        this.game = game;

        this.color = color;
        this.setSourceByColor();

        this.x = x;
        this.y = y;

        this.width = 32;
        this.height = 16;

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/BlockColors.png");

        this.BB = new BoundingBox(this.x, this.y, this.width, this.height);
    }

    setSourceByColor() {
        if (this.color === "Green") {
            this.sx = 1;
            this.sy = 1;
        } else if (this.color === "Red") {
            this.sx = 10;
            this.sy = 1;
        } else if (this.color === "Yellow") {
            this.sx = 19;
            this.sy = 1;
        } else if (this.color === "Blue") {
            this.sx = 1;
            this.sy = 6;
        } else if (this.color === "Pink") {
            this.sx = 10;
            this.sy = 6;
        } else if (this.color === "Purple") {
            this.sx = 19;
            this.sy = 6;
        }
    }

    update() {

    }

    draw(ctx) {
        ctx.drawImage(this.spritesheet, this.sx, this.sy, 8, 4, this.x, this.y, this.width, this.height);
    }
}