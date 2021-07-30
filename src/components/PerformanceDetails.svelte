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

{#if item.canIUse || item.links}
  <h2>Links</h2>
  <ul>
    {#if item.canIUse}
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
    {/if}
    {#if item.links}
      {#each item.links as link}
      <li>
        <a
          href={link}
          target="_blank"
          rel="noopener"
          class="can-i-use"
        >
          {link}
        </a>
      </li>
      {/each}
    {/if}
  </ul>
{/if}


<style>
.details {
  padding-bottom: 1em;
}

</style>