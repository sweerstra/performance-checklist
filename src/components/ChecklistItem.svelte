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

<li class="item" class:is-active={isActive} on:click={onSelect}>
  <div class="checkbox"></div>
  <div class="text">
    <h2>{item.title}</h2>
    <p>{item.description}</p>
    <div class="tags">
      {#each item.disciplines as discipline}
        <div class="tag">{discipline}</div>
      {/each}
    </div>
  </div>
</li>

<style>

    h2 {
      margin: 0 0 0.25em;
    }

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

    .tags {
      display: flex;
      gap: 0.5em;
    }

    .tag {
      padding: 0.25em 1em;
      font-size: 0.8em;
      border: 1px solid #8ab4f8;
      color: #8ab4f8;
      border-radius: 1em;
    }
</style>
