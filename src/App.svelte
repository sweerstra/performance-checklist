<script lang="ts">
	import { Router, Route } from "svelte-routing";
	import ChecklistPage from "./pages/ChecklistPage.svelte";
</script>

<Router>
	<Route path="/" component={ChecklistPage} />
	<Route path="items" component={ChecklistPage} />
	<Route path="items/:slug" component={ChecklistPage} />
</Router>
