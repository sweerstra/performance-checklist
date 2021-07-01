<script lang="ts">
    import type { ChecklistItemModel } from "../interfaces/ChecklistItem";

    export let item: ChecklistItemModel;
</script>

<div>
    <h2>{item.title}</h2>
    <h3>{item.description}</h3>
    <ul>
        {#each item.solutions as solution}
            <li>{solution.description} x {solution.category}</li>
        {/each}
    </ul>
</div>
