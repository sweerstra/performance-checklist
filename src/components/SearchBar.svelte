<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let className: string;

    let searchTerm: string = "";

    const dispatch = createEventDispatcher();

    function onSearch(e: Event) {
        e.preventDefault();

        dispatch("search", searchTerm);
    }
</script>

<form on:submit={onSearch} class={className}>
    <input bind:value={searchTerm} name="search-term" />
    <button>Search</button>
</form>
