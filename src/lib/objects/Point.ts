import { ctxStore, score, stateGame } from "$lib/stores";
import { get } from "svelte/store";
import type Asteroid from "./Asteroid";

export class Point {
    x: number;
    y: number;
    points = 0;
    ctx: CanvasRenderingContext2D;

    constructor(asteroid: Asteroid) {
        const ctx = get(ctxStore);
        const { level, x, y } = asteroid;

        this.ctx = ctx;

        this.x = x;
        this.y = y;

        if (level === 1) {
            this.points = 10;
            score.update(val => val + 10);
        } else if (level === 2) {
            this.points = 20
            score.update(val => val + 20);
        } else {
            this.points = 30
            score.update(val => val + 30);
        }

        setTimeout(
            () => {
                const state = get(stateGame);

                state.points = state.points.filter(p => p !== this);
            },
            1500
        )
    }

    update() {
        this.y -= 0.9 
    }

    draw() {
        this.update();
        const { x, y, points } = this;

        this.ctx.font = "20px 'Press Start 2P'";
        this.ctx.fillStyle = "#fe3637";
        this.ctx.fillText(`+${points}`, x, y);
    }
}