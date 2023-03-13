class PlayArea {
    constructor(game) {
        this.game = game;
        this.game.area = this;

        this.left = 0;
        this.right = params.CANVAS_WIDTH;
        this.top = 0;
        this.bottom = params.CANVAS_HEIGHT;

        this.ball = new Ball(game);
        this.game.addEntity(this.ball);

        this.setUpBricks();
    }

    setUpBricks() {
        for (let i = 0; i < 16; i++) {
            this.game.addEntity(new Brick(this.game, "Red", i * 32, 96));
        }

        for (let i = 0; i < 16; i++) {
            this.game.addEntity(new Brick(this.game, "Yellow", i * 32, 112));
        }

        for (let i = 0; i < 16; i++) {
            this.game.addEntity(new Brick(this.game, "Green", i * 32, 128));
        }

        for (let i = 0; i < 16; i++) {
            this.game.addEntity(new Brick(this.game, "Purple", i * 32, 144));
        }

        for (let i = 0; i < 16; i++) {
            this.game.addEntity(new Brick(this.game, "Blue", i * 32, 160));
        }

        for (let i = 0; i < 16; i++) {
            this.game.addEntity(new Brick(this.game, "Pink", i * 32, 176));
        }
    }

    update() {

    }

    draw(ctx) {
        ctx.fillStyle = "Black";
        ctx.strokeStyle = "Black";
        ctx.fillRect(0, 0, params.CANVAS_WIDTH, params.CANVAS_HEIGHT);
    }
}