<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { ChecklistItemModel } from "../interfaces/ChecklistItem";

    export let item: ChecklistItemModel;
    export let isActive: boolean;

    const dispatch = createEventDispatcher();

    function onSelect() {
        dispatch("select");
    }
</script>

<li class="checklist-item" class:is-active={isActive}>
    <button class="button-unstyled padding-4 text-left" on:click={onSelect}>
        <h3 class="no-margin">{item.title} x {item.description}</h3>
        {#each item.solutions as solution}
            <li>{solution.description} x {solution.category}</li>
        {/each}
    </button>
</li>

<style>
    .checklist-item {
        border: 1px solid cornflowerblue;
        border-radius: 0.25rem;
        margin-bottom: var(--spacer-2);
    }

    .checklist-item.is-active {
        background-color: rgb(146, 179, 241);
    }
</style>
