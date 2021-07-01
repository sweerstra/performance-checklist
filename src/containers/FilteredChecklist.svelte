<script lang="ts">
    import { createEventDispatcher } from "svelte";
	import type { ChecklistItemModel } from "../interfaces/ChecklistItem";
	import checklistData from "../data/checklist";
	import Checklist from "../components/Checklist.svelte";
	import SearchBar from "../components/SearchBar.svelte";

    const dispatch = createEventDispatcher();

	export let selectedItem: ChecklistItemModel;

	let checklist: ChecklistItemModel[] = checklistData;

	function onChecklistItemSelect(event: CustomEvent<ChecklistItemModel>) {
		const { slug } = event.detail;
		dispatch('select', slug);
	}

	function filterChecklistItems(searchTerm: string) {
		const includesSearchTerm = (keyword: string) =>
			keyword.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesAnySearchTerm = (...keywords: string[]) =>
			keywords.some(includesSearchTerm);

		return checklistData.filter(({ title, description, solutions }) => {
			return (
				matchesAnySearchTerm(title, description) ||
				solutions.some((solution) => {
					return matchesAnySearchTerm(
						solution.category,
						solution.description
					);
				})
			);
		});
	}

	function onSearch(event: CustomEvent<string>) {
		const searchTerm = event.detail;
		checklist = filterChecklistItems(searchTerm);
	}
</script>

<div>
	<SearchBar on:search={onSearch} className="margin-bottom-4" />

	<Checklist
		items={checklist}
		isActiveItem={(item) => selectedItem && item.slug === selectedItem.slug}
		on:select={onChecklistItemSelect}
	/>
</div>
