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

<main>
	<header>
		<h1 class="text-center no-margin">Performance Checklist</h1>
	</header>

	<aside class="sidebar">
		<FilteredChecklist {selectedItem} on:select={onChecklistItemSelect} />
	</aside>

	{#if selectedItem}
		<div class="container">
			<ChecklistItemDetail item={selectedItem} />
		</div>
	{/if}
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 30rem 1fr;
		grid-template-rows: auto 1fr;
		grid-gap: 2rem 4rem;
		min-height: 100vh;
		padding: var(--spacer-4) var(--spacer-7);
		max-width: 1200px;
		margin: 0 auto;
	}

	header {
		grid-column: 1 / -1;
	}

	aside {
		max-width: 30rem;
	}

	.container {
		width: 100%;
		max-width: 60rem;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 3rem;
		font-weight: 100;
	}
</style>
