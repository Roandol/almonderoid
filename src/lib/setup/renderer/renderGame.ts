import type { Asteroid, Bullet } from "$lib/objects";
import { canvasStore as Canvas, ctxStore as Ctx, stateGame } from "$lib/stores";
import { get } from "svelte/store";
import type { RenderGame } from "./types";

function drawObjects(objects: (Bullet | Asteroid)[]) {
    for (const obj of objects) {
        obj.draw();
    }
}

function clearCanvas(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

let loopRender: number;

export const renderGame: RenderGame = () => {
    const { ships, asteroids } = get(stateGame);
    const canvas = get(Canvas);
    const ctx = get(Ctx);

    clearCanvas(canvas, ctx);

    if (ships.length > 0) {
        for (const ship of ships) {
            ship.draw();

            drawObjects(ship.bullets);
        }
    }

    if (asteroids.length > 0) {
        drawObjects(asteroids)
    }

    loopRender = requestAnimationFrame(renderGame);
}

renderGame.stopRender = (clear = false) => {
    const canvas = get(Canvas);
    const ctx = get(Ctx);

    cancelAnimationFrame(loopRender);
    if (clear)
        clearCanvas(canvas, ctx);
}

export default renderGame;