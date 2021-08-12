<script lang="ts">
  import { navigate } from "svelte-routing";
  import { fly } from "svelte/transition";
  import type { ChecklistItemModel } from "../interfaces/ChecklistItem";
  import checklistData from "../data/checklist";
  import contentfulData from "../data/contentful";
  import FilteredChecklist from "../containers/FilteredChecklist.svelte";
  import PerformanceDetails from "../components/PerformanceDetails.svelte";
  
  export let slug: string = undefined;

  let selectedItem: ChecklistItemModel;

  // update selectedItem when slug changes
  $: selectedItem = getChecklistItemBySlug(slug);

  function onChecklistItemSelect(event: CustomEvent<string>) {
    const slug = event.detail;
    navigateToItem(slug);
  }

  function navigateToItem(slug: string) {
    navigate(`/${slug}`, { replace: true });
  }

  function getChecklistItemBySlug(slug: string) {
    return checklistData.find((checklistItem) => checklistItem.slug === slug);
  }

  function onClose() {
    navigate(`/`, { replace: true });
  }
</script>

<div class="page">
  <header>
    <h1>Performance Checklist</h1>
  </header>

  <main>
    <FilteredChecklist {selectedItem} on:select={onChecklistItemSelect} />

    {#if selectedItem}
      <div class="container" in:fly={{ x: 200, duration: 500 }}>
        <PerformanceDetails item={selectedItem} />
        <button on:click={onClose} class="btn-close">
          <svg
            width="16"
            height="16"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"
            />
          </svg>
        </button>
      </div>
    {/if}
  </main>
</div>

<style>
  .page {
    max-width: 60em;
    margin: 0 auto;
    padding: 0 1em;
  }

  .container {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 36em;
    padding: 1em 1em;
    background: #303134;
  }

  h1 {
    font-size: 3rem;
  }

  .btn-close {
    position: absolute;
    top: 1em;
    right: 1em;
    border-radius: 50%;
    width: 2em;
    height: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
