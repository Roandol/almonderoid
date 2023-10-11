<script lang="ts">
	export let message = 'Tem certeza?';
	export let onConfirm: Function;
	export let onCancel: Function;
	export let show: boolean = true;

	function confirm() {
		onConfirm();
	}

	function cancel() {
		onCancel();
	}
</script>

{#if show}
	<div class="fixed inset-0 flex items-center justify-center z-50">
		<div class="bg-black border border-red-500 rounded-lg p-8 shadow-lg">
			<p class="text-xl mb-4">{message}</p>
			<div class="flex justify-center">
				<button
					class="mr-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
					on:click={cancel}>Cancelar</button
				>
				<button
					class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
					on:click={confirm}>Confirmar</button
				>
			</div>
		</div>
	</div>
{/if}
