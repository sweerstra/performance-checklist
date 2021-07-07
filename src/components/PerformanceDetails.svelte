<script lang="ts">
    import type { ChecklistItemModel } from "../interfaces/ChecklistItem";

    export let item: ChecklistItemModel;
</script>

<div class="text">
  <h2>{item.title}</h2>
  <p>{item.description}</p>
  <div class="tags">
    {#each item.disciplines as discipline}
      <div class="tag">{discipline}</div>
    {/each}
  </div>
</div>


<style>

    h2 {
      margin: 0 0 0.25em;
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
