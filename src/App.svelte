<script lang="ts">
	import checklistData from "./data/checklist";
	import type { ChecklistItemModel } from "./interfaces/ChecklistItem";
	import Checklist from "./components/Checklist.svelte";

	let checklist: ChecklistItemModel[] = checklistData;
	let selectedChecklistItem: ChecklistItemModel;
	let searchTerm: string = '';

	function onChecklistItemSelect(event: CustomEvent<ChecklistItemModel>) {
		selectedChecklistItem = event.detail;
	}

	const includesSearchTerm = (keyword: string) => keyword.toLowerCase().includes(searchTerm.toLowerCase());
	const matchesAnySearchTerm = (...keywords: string[]) => keywords.some(includesSearchTerm);

	function onSearch(e: Event) {
		e.preventDefault();

		checklist = checklistData.filter(({ title, description, solutions }) => {
			return (
				matchesAnySearchTerm(title, description) ||
				solutions.some(solution => {
					return matchesAnySearchTerm(solution.category, solution.description);
				})
			);
		});
	}
</script>

<main>
	<header>
		<h1 class="text-center no-margin">Performance Checklist</h1>
	</header>

	<aside class="sidebar">
		<form on:submit={onSearch} class="margin-bottom-4">
			<input bind:value={searchTerm} name="search-term" />
			<button>Search</button>
		</form>

		<Checklist 
			items={checklist} 
			isActiveItem={item => selectedChecklistItem && item.title === selectedChecklistItem.title}
			on:select={onChecklistItemSelect} />
	</aside>

	{#if selectedChecklistItem}
		<div class="container">
			{selectedChecklistItem.title}
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
