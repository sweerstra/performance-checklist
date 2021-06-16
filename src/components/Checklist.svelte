<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { ChecklistItemModel } from "../interfaces/ChecklistItem";

    export let items: ChecklistItemModel[];
    export let isActiveItem: (item: ChecklistItemModel) => boolean;

    const dispatch = createEventDispatcher();

    function selectChecklistItem(item: ChecklistItemModel) {
        dispatch("select", item);
    }
</script>

<ul class="list-unstyled">
    {#each items as item}
        <li class="checklist-item" class:is-active={isActiveItem(item)}>
            <button
                class="button-unstyled padding-4 text-left"
                on:click={() => selectChecklistItem(item)}
            >
                <h3 class="no-margin">{item.title} x {item.description}</h3>
                {#each item.solutions as solution}
                    <li>{solution.description} x {solution.category}</li>
                {/each}
            </button>
        </li>
    {/each}
</ul>

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
