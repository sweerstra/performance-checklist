<script lang="ts">
    import PerformanceHeader from "./PerformanceHeader.svelte";
    import SvelteMarkdown from 'svelte-markdown'

    import type { ChecklistItemModel } from "../interfaces/ChecklistItem";

    export let item: ChecklistItemModel;
</script>

<div class="header">
  <PerformanceHeader item={item} />
</div>

{#if item.usage}
  <div class="details">
    <h2>Usage</h2>
    <SvelteMarkdown source="{item.usage}" />
  </div>
{/if}

{#if item.canIUse}
  <h2>Links</h2>
  <ul>
    <li>
      <a
        href="{`https://caniuse.com/${item.canIUse}`}"
        target="_blank"
        rel="noopener"
        class="can-i-use"
      >
        https://caniuse.com/{item.canIUse}
      </a>
    </li>
  </ul>
{/if}


<style>
.details {
  padding-bottom: 1em;
}

</style>