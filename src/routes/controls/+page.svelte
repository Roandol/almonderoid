<script lang="ts">
	import { keyStore } from "$lib/stores";
	import { get } from "svelte/store";

	const keys = get(keyStore);
</script>

<section class="flex flex-col text-center w-full gap-y-2 p-2">
	<div class="flex flex-col items-center">
		<h1 class="font text-lg my-4">Controls</h1>
	</div>
	<div class="flex flex-col gap-y-2">
		<h3><kbd class="kbd">{keys.shootKey.toUpperCase()}</kbd> to shoot</h3>
		<h3><kbd class="kbd">{keys.forwardKey.toUpperCase()}</kbd> to go forward</h3>
		<h3><kbd class="kbd">{keys.leftKey.toUpperCase()}</kbd> to rotate left</h3>
		<h3><kbd class="kbd">{keys.rightKey.toUpperCase()}</kbd> to rotate right</h3>
		<p class="text-sm">
			you can also change<br />
			the settings of the game
			<a class="link decoration-wavy hover:text-primary" href="/config">here</a>
		</p>
	</div>
</section>
