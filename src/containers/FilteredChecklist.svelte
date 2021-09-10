<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { query } from "svelte-apollo";
  import type { ReadableQuery } from "svelte-apollo";
  import type {
    ChecklistItemModel,
    ChecklistQueryResponse,
  } from "../interfaces/ChecklistItem";
  import checklistData from "../data/checklist";
  import Checklist from "../components/Checklist.svelte";
  import SearchBar from "../components/SearchBar.svelte";
  import { GET_CHECKLIST } from "../data/queries";

  const dispatch = createEventDispatcher();

  export let selectedItem: ChecklistItemModel;

  const checklistResponse = query(
    GET_CHECKLIST
  ) as ReadableQuery<ChecklistQueryResponse>;
  let checklist: ChecklistItemModel[] = [];

  $: {
    if ($checklistResponse.data) {
      checklist = $checklistResponse.data.all_checklist_item.items;
    }
  }

  function onChecklistItemSelect(event: CustomEvent<ChecklistItemModel>) {
    const { url } = event.detail;
    dispatch("select", url);
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
          return matchesAnySearchTerm(solution.category, solution.description);
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
  <SearchBar on:search={onSearch} />

  <Checklist
    items={checklist}
    isActiveItem={(item) => selectedItem && item.url === selectedItem.url}
    on:select={onChecklistItemSelect}
  />
</div>
