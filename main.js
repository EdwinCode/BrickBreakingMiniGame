const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/BlockColors.png");
ASSET_MANAGER.queueDownload("./sprites/PaddleMedium.png");
ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	params.CANVAS_WIDTH = canvas.width;
	params.CANVAS_HEIGHT = canvas.height;

	gameEngine.addEntity(new PlayArea(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
