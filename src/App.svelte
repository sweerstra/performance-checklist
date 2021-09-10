<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import ChecklistPage from "./pages/ChecklistPage.svelte";
  import { initializeApollo } from "./data/apollo";

  initializeApollo();
</script>

<Router>
  <Route path="/" component={ChecklistPage} />
  <Route path="/:url" component={ChecklistPage} />
</Router>
