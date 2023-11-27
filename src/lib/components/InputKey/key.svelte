<script lang="ts">
    export let key: string;
    export let labelText: string;

    const handleChange = (e: KeyboardEvent) => {
        e.preventDefault();

        key = e.key.trim() ? e.key : e.code;
    };

    $: keyValue = key.toLocaleUpperCase();
</script>

<section class="form-control">
    <label class="label" for="left">
        <span class="label-text">{labelText}</span>
    </label>
    <div class="input-group">
        <input class="input input-bordered" on:keydown={handleChange} bind:value={keyValue} id="left" type="text" />
        <span class="transition-colors duration-300 {key ? 'bg-secondary' : 'bg-neutral'}">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                />
            </svg>
        </span>
    </div>
</section>