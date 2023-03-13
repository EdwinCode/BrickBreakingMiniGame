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
    }

    update() {

    }

    draw(ctx) {
        ctx.fillStyle = "Black";
        ctx.strokeStyle = "Black";
        ctx.fillRect(0, 0, params.CANVAS_WIDTH, params.CANVAS_HEIGHT);
    }
}