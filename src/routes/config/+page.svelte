<script lang="ts">
	import { goto } from '$app/navigation';
	import InputKey from '$lib/components/InputKey';
	import { keyStore } from '$lib/stores';
	import { get } from 'svelte/store';

	const keys = get(keyStore);

	function setKey() {
		keyStore.set({
			forwardKey: keys.forwardKey,
			leftKey: keys.leftKey,
			rightKey: keys.rightKey,
			shootKey: keys.shootKey
		});
		goto('/');
	}
</script>

<div class="w-1/2 mx-auto flex flex-col items-center">
	<form class="space-y-2" on:submit|preventDefault={setKey}>
		<InputKey labelText={'left key'} bind:key={keys.leftKey} />
		<InputKey labelText={'foward key'} bind:key={keys.forwardKey} />
		<InputKey labelText={'right key'} bind:key={keys.rightKey} />
		<InputKey labelText={'shoot key'} bind:key={keys.shootKey} />
		<button class="btn btn-secondary btn-block">save</button>
	</form>
</div>
