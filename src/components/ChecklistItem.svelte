<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import PerformanceHeader from "./PerformanceHeader.svelte";

    import type { ChecklistItemModel } from "../interfaces/ChecklistItem";

    export let item: ChecklistItemModel;
    export let isActive: boolean;

    const dispatch = createEventDispatcher();

    function onSelect() {
        dispatch("select");
    }
</script>

<li class="item" class:is-active={isActive} on:click={onSelect}>
  <div class="checkbox">
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 80 80"><path d="M26.56,75.19h-.12A5.51,5.51,0,0,1,22,72.81L3,45.24A4,4,0,1,1,9.6,40.7l17,24.73,44.78-59a4,4,0,0,1,6.37,4.83L30.94,73A5.52,5.52,0,0,1,26.56,75.19Z"/></svg>
  </div>
  <PerformanceHeader item={item} />
</li>

<style>

    .checkbox {
      width: 1.5em;
      height: 1.5em;
      border: 1px solid #fff;
      border-radius: 0.25em;
      margin-top: 0.25em;
      flex: 0 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .icon {
      width: 0.9em;
      height: 0.9em;
      fill: #fff;
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
