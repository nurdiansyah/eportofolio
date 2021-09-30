<script>
  import Navbar from "$lib/theme/components/navbar.svelte";
  import ConfigSP from "$lib/SveltePress/app.config";
  import { session } from "$app/stores";

  let nav = ConfigSP.nav.overwrite ? ConfigSP.nav.items || [] : $session.get("navbar").concat(ConfigSP.nav.items || []);

  export let isSideNavOpen;
  export let sidebar;
</script>

<Navbar sidebar="{sidebar}" bind:isSideNavOpen nav="{nav}" />
