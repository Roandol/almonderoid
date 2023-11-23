<script lang="ts">
	import { game } from '$lib/setup/game';
	import { highScore, isGameOver, score, lives, keyStore, isGamePaused, isGameStarted, gameSettingsStore } from '$lib/stores';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	const keys = get(keyStore);
	let start: () => void;
	let pause: () => void;
	let reset: () => void;
	let continueGame: () => void;
	
	onMount(() => {
		const gameSettings = game();

		start = gameSettings.start;
		pause = gameSettings.pause;
		reset = gameSettings.reset;
		continueGame = gameSettings.continueGame;

		gameSettingsStore.set(gameSettings);
	})

	
	function handlePause() {
		if(get(isGamePaused)) continueGame();
		else pause();
	}
</script>

<div class="flex justify-center">
	<div class="relative">
		<div class="my-2 inline-flex w-full justify-between text-lg">
			<h2>SCORE: {$score}</h2>
			<h2>LIVES: {$lives}</h2>
			<h2>HIGHSCORE: {$highScore}</h2>
		</div>
		{#if $isGameOver}
			<div class="absolute top-1/2 left-1/2 -translate-x-1/2 transform">
				<span class="text-3xl text-primary">GAME OVER</span>
			</div>
		{/if}
		{#if $isGamePaused}
			<div class="absolute top-1/2 left-1/2 -translate-x-1/2 transform">
				<span class="text-3xl text-secondary">PAUSED</span>
			</div>
		{/if}
		<canvas
			class="rounded-box border-2 border-primary bg-neutral shadow-md shadow-red-600/50"
			height="460"
			width="640"
			id="game"
		/>
	</div>
	<div class="flex items-center m-5">
		<div class="flex flex-col gap-y-2">
			<button class="btn border-2 border-primary" disabled={$isGameStarted} on:click={start}>START</button>
			<button class="btn border-2 border-primary" disabled={!$isGameStarted} on:click={handlePause}>{$isGamePaused ? "CONTINUE" : "PAUSE"}</button>
			<button class="btn border-2 border-primary" disabled={!$isGameStarted}  on:click={reset}>RESET</button>
		</div>
	</div>
</div>