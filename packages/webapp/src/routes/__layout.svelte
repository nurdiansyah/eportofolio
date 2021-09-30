<script>
  import { page } from "$app/stores";

  import "$lib/theme/styles/global.scss";

  import "highlight.js/styles/hybrid.css";

  import Navbar from "$lib/components/navbar.svelte";
  import Sidebar from "$lib/components/sidebar.svelte";

  // Whether to show the sidebar or not
  $: sidebar = $page.path !== "/";

  let isSideNavOpen = false;
</script>

<Navbar sidebar="{sidebar}" bind:isSideNavOpen />

{#if sidebar}
  <Sidebar bind:isSideNavOpen />
{/if}

<slot />
