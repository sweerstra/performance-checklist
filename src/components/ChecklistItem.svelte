<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import PerformanceDetails from "./PerformanceDetails.svelte";

    import type { ChecklistItemModel } from "../interfaces/ChecklistItem";

    export let item: ChecklistItemModel;
    export let isActive: boolean;

    const dispatch = createEventDispatcher();

    function onSelect() {
        dispatch("select");
    }
</script>

<li class="item" class:is-active={isActive} on:click={onSelect}>
  <div class="checkbox"></div>
  <PerformanceDetails item={item} />
</li>

<style>

    .checkbox {
      width: 1.5em;
      height: 1.5em;
      border: 1px solid #fff;
      border-radius: 0.25em;
      margin-top: 0.25em;
      flex: 0 0 auto;
    }

    .item {
        border-bottom: 2px solid #fff;
        padding: 1em 0.5em;
        display: flex;
        gap: 1em;
    }

    .item:first-child {
        border-top: 2px solid #fff;
    }

    .item:hover,
    .item.is-active {
        background-color: rgba(138,180,248,.04);
    }

</style>
