<script lang="ts">
	import setupGame from '$lib/setupGame';
	import { highScore, isGameOver, isGameStarted, score } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => setupGame());
</script>

<div>
	<div class="my-2 inline-flex w-full justify-between text-lg">
		<h2>SCORE: {$score}</h2>
		<h2>HIGHSCORE: {$highScore}</h2>
	</div>

	<div class="relative">
		{#if $isGameOver}
			<div class="absolute top-1/2 left-1/2 -translate-x-1/2 transform">
				<span class="text-3xl text-primary">GAME OVER</span>
			</div>
		{/if}
		<canvas
			class="rounded-box border-2 border-primary bg-neutral shadow-md shadow-red-600/50"
			height="460"
			width="640"
			id="game"
		/>
	</div>
</div>
