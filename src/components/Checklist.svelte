<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type { ChecklistItemModel } from "../interfaces/ChecklistItem";
    import ChecklistItem from "./ChecklistItem.svelte";

    export let items: ChecklistItemModel[];
    export let isActiveItem: (item: ChecklistItemModel) => boolean;

    const dispatch = createEventDispatcher();

    function onSelectChecklistItem(item: ChecklistItemModel) {
        dispatch("select", item);
    }
</script>

<ul class="list">
    {#each items as item}
        <ChecklistItem
            {item}
            isActive={isActiveItem(item)}
            on:select={() => onSelectChecklistItem(item)}
        />
    {/each}
</ul>


<style>
	.list {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
</style>
