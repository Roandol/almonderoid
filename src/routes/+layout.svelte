<script lang="ts">
	import '../app.css';
	import '@fontsource/press-start-2p';
	import { fly } from 'svelte/transition';
	import { expoIn, expoOut } from 'svelte/easing';
	import PopConfirm from '$lib/components/PopConfirm/PopConfirm.svelte';
	import { goto } from '$app/navigation';
	import type { DataUrl } from '$lib/types';
	import { get } from 'svelte/store';
	import { gameSettingsStore } from '$lib/stores';

	export let data: DataUrl;

	$: pathname = data.currentRoute;

	let ShowPopupConfirm: boolean = false;

	const handleConfirm = () => {
		const settings = get(gameSettingsStore);
		ShowPopupConfirm = false;
		console.log(settings);
		settings.reset();
		goto('/');
	};

	const handleCancel = () => {
		ShowPopupConfirm = false;
	};

	const openPopup = () => {
		ShowPopupConfirm = true;
	};

	const returnMenu = () => {
		if (pathname === '/game') {
			openPopup();
			return;
		}
		goto('/');
	};
</script>

{#if pathname !== '/'}
	<header>
		<nav class="navbar justify-center">
			<div>
				<button class="btn btn-link" on:click={returnMenu}>Menu</button>
			</div>
		</nav>
	</header>
	<PopConfirm onConfirm={handleConfirm} onCancel={handleCancel} show={ShowPopupConfirm} />
{/if}

<main
	class="flex items-center justify-center w-full"
	in:fly={{ y: -5, duration: 500, delay: 200, easing: expoOut }}
	out:fly={{ y: 5, duration: 200, easing: expoIn }}
>
	<slot />
</main>
