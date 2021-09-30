<script>
  // index.svelte has to be as self-contained as possible
  // so users can easily remove it

  import Typewriter from "svelte-typewriter";
  import Config from "$lib/SveltePress/app.config";

  import ArrowRight32 from "carbon-icons-svelte/lib/ArrowRight32";

  import { session } from "$app/stores";

  $: nav = Config.nav.overwrite ? Config.nav.items || [] : $session.get("navbar").concat(Config.nav.items || []);

  let currentYear = new Date().getFullYear();

  // Typewriter
  let people = ["humans", "you", "your relatives", "everyone"];

  // Logo animation
  import { draw } from "svelte/transition";

  let duration = 4000;
  let delay = 200;
  let condition = false;
  let finished = false;

  setTimeout(() => (condition = true));
  setTimeout(() => {
    finished = true;
  }, duration - 200); // Fill colors a bit earlier
</script>

<svelte:head>
  <meta name="og:title" content="{Config.title}" />
  <title>{Config.title}</title>
</svelte:head>

<div class="-mt-18">
  <div class="hero min-h-screen bg-base-100">
    <div class="text-center hero-content">
      <div class="max-w-md flex flex-col justify-center items-center">
        <svg shape-rendering="auto" width="250" height="250" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="null">
              <feBlend mode="normal" in="SourceGraphic"></feBlend>
            </filter>
          </defs>
          <g filter="url(#null)">
            {#if condition}
              <path
                class:filled-1="{finished}"
                in:draw="{{ duration, delay }}"
                d="M250 250v250h500v250H0v150a100 100 0 00100 100h800a100 100 0 00100-100V250H250z"
                fill="#ffd0bf"
              ></path>
              <path
                class:filled-2="{finished}"
                in:draw="{{ duration, delay }}"
                d="M100 0A100 100 0 000 100v650h750V500H250V250h750V100A100 100 0 00900 0H100z"
                fill="#ff3e00"
              ></path>
            {/if}
          </g>
        </svg>
        <h1 class="my-5 text-4xl font-bold">Welcome to SveltePress</h1>
        <p class="mb-5 flex flex-row justify-center">
          Documentation for 
          <Typewriter loop="{3000}" cursor="#ff3e00">
            {#each people as person}
              <span>{person}.</span>
            {/each}
            {" "}
          </Typewriter>
        </p>
        <a
          class="btn btn-primary flex flex-row justify-between"
          href="{nav.length > 0 ? nav[0].link : $session.get('navbar')[0]?.link}"
        >
          <span>Let's get started</span>
          <ArrowRight32 />
        </a>
      </div>
    </div>
  </div>

  <footer class="p-4 footer bg-base-300 text-base-content footer-center">
  </footer>
</div>

