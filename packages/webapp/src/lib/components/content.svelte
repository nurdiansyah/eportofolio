<script>
  import Content from "$lib/theme/components/content.svelte";

  export let pagination = {};
  export let meta = {};
</script>

<Content pagination="{pagination}" meta="{meta}">
  <slot />
</Content>
