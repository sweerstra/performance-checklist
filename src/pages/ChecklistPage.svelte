<script lang="ts">
	import { navigate } from "svelte-routing";
	import type { ChecklistItemModel } from "../interfaces/ChecklistItem";
	import checklistData from "../data/checklist";
	import FilteredChecklist from "../containers/FilteredChecklist.svelte";
	import ChecklistItemDetail from "../components/ChecklistItemDetail.svelte";

	export let slug: string = undefined;

	let selectedItem: ChecklistItemModel;

	// update selectedItem when slug changes
	$: selectedItem = getChecklistItemBySlug(slug);

	function onChecklistItemSelect(event: CustomEvent<string>) {
		const slug = event.detail;
		navigateToItem(slug);
	}

	function navigateToItem(slug: string) {
		navigate(`/items/${slug}`, { replace: true });
	}

	function getChecklistItemBySlug(slug: string) {
		return checklistData.find(
			(checklistItem) => checklistItem.slug === slug
		);
	}
</script>

<div class="page">
  <header>
    <h1>Performance Checklist</h1>
  </header>

  <main>
    <FilteredChecklist {selectedItem} on:select={onChecklistItemSelect} />

    {#if selectedItem}
      <div class="container">
        <ChecklistItemDetail item={selectedItem} />
      </div>
    {/if}
  </main>
</div>

<style>
  .page {
		max-width: 90em;
		margin: 0 auto;
    padding: 0 1em;
  }

	main {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
	}

	h1 {
		font-size: 3rem;
	}
</style>
