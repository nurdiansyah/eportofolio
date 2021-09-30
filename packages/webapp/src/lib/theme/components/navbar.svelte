<script>
  import "virtual:windi.css";

  import { page } from "$app/stores";

  import Search from "$lib/components/search.svelte";
  import SearchModal from "$lib/theme/components/modal.svelte";

  import Config from "$lib/SveltePress/app.config";

  import Menu24 from "carbon-icons-svelte/lib/Menu24";
  import Close24 from "carbon-icons-svelte/lib/Close24";
  import NavbarItem from '$lib/theme/components/NavbarItem.svelte';

  export let isSideNavOpen;
  export let sidebar;
  export let nav;


  function isExternal(link) {
    const host = "https://" + $page.host;
    return new URL(link, host).origin !== host;
  }


  let isOpen = false;
  $: navSize = nav.length > 14 ? "btn-xs" : nav.length > 7 ? "btn-sm" : "btn-md";
</script>

<header class="sticky top-0 z-50 rounded-t-none navbar mb-2 pr-2 bg-neutral text-neutral-content">
  <div class="{`flex-none lg:hidden ${sidebar ? 'inline-flex' : 'hidden'}`}">
    <button
      class="btn btn-square btn-ghost"
      aria-label="Menu"
      on:click="{() => {
        isSideNavOpen = !isSideNavOpen;
        isOpen && (isOpen = false);
      }}"
    >
      {#if isSideNavOpen}
        <Close24 />
      {:else}
        <Menu24 />
      {/if}
    </button>
  </div>
  <div class="flex-none px-2 mx-2">
    <a class="text" href="/">
      {Config.title}
    </a>
  </div>
  <div class="flex-1 px-2 mx-2">
    <div class="items-stretch hidden lg:flex">
      {#if nav.length > 5}
        <div class="dropdown dropdown-hover">
          <div tabindex="0" class="m-1 btn">Pages</div>
          <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
            {#each nav as navItem}
              <li>
                <a
                  class="btn btn-ghost rounded-btn"
                  href="{navItem.link}"
                  target="{isExternal(navItem.link) ? '_blank' : undefined}"
                  rel="{isExternal(navItem.link) ? 'noopener' : undefined}"
                  sveltekit:prefetch="{!isExternal(navItem.link) ? true : null}"
                >
                  {navItem.name}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {:else}
        {#each nav as navItem}
          <a
            class="btn btn-ghost rounded-btn"
            href="{navItem.link}"
            target="{isExternal(navItem.link) ? '_blank' : undefined}"
            rel="{isExternal(navItem.link) ? 'noopener' : undefined}"
            sveltekit:prefetch="{!isExternal(navItem.link) ? true : null}"
          >
            {navItem.name}
          </a>
        {/each}
      {/if}
    </div>
  </div>
  <div class="md-inline-flex">
        <NavbarItem>
          Login
        </NavbarItem>
  </div>
<!--  <div class="hidden sm:flex flex-none">-->
<!--    <div class="form-control mr-2">-->
<!--      <Search />-->
<!--    </div>-->
<!--  </div>-->
<!--  <div class="flex-none hidden lg:inline-flex">-->
<!--    <button aria-label="Toggle Theme" class="btn btn-square btn-ghost" on:click="{() => setTheme()}">-->
<!--      <svelte:component this="{themeIcon}" />-->
<!--    </button>-->
<!--  </div>-->
<!--  <div class="flex-none lg:hidden">-->
<!--    <button-->
<!--      class="btn btn-square btn-ghost sm:hidden"-->
<!--      aria-label="Menu"-->
<!--      on:click="{() => {-->
<!--        isOpen = !isOpen;-->
<!--        isSideNavOpen && (isSideNavOpen = false);-->
<!--      }}"-->
<!--    >-->
<!--      {#if isOpen}-->
<!--        <Close24 />-->
<!--      {:else}-->
<!--        <Search24 />-->
<!--      {/if}-->
<!--    </button>-->
<!--    <div class="dropdown dropdown-hover dropdown-end ">-->
<!--      <button class="btn btn-square btn-ghost" aria-label="Menu">-->
<!--        <OverflowMenuVertical24 />-->
<!--      </button>-->
<!--      <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 shadow-2xl">-->
<!--        {#each nav as navItem}-->
<!--          <li>-->
<!--            <a-->
<!--              class="{`btn btn-ghost rounded-btn sp&#45;&#45;wrap&#45;&#45;btn ${navSize} ${-->
<!--                navSize !== 'btn-md' ? 'sp&#45;&#45;no&#45;&#45;y&#45;&#45;padding' : ''-->
<!--              }`}"-->
<!--              href="{navItem.link}"-->
<!--              target="{isExternal(navItem.link) ? '_blank' : undefined}"-->
<!--              rel="{isExternal(navItem.link) ? 'noopener' : undefined}"-->
<!--              sveltekit:prefetch="{!isExternal(navItem.link) ? true : null}"-->
<!--            >-->
<!--              {navItem.name}-->
<!--            </a>-->
<!--          </li>-->
<!--        {/each}-->
<!--        <li><div class="divider"></div></li>-->
<!--        <li>-->
<!--          <button-->
<!--            class="{`btn btn-ghost rounded-btn ${navSize} ${navSize !== 'btn-md' ? 'sp&#45;&#45;no&#45;&#45;y&#45;&#45;padding' : ''}`}"-->
<!--            on:click="{() => setTheme()}"-->
<!--          >-->
<!--            Toggle Theme-->
<!--          </button>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--  </div>-->
</header>

<div class="sm:hidden">
  <SearchModal bind:isOpen>
    <Search bind:isOpen />
  </SearchModal>
</div>

<!--suppress CssInvalidPropertyValue -->
<style>
  .sp--wrap--btn {
    text-overflow: ellipsis;
    white-space: wrap;
    overflow: hidden;
  }
  .sp--no--y--padding {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
</style>
