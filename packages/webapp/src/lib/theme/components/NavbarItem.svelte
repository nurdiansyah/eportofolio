<script>

</script>

<button {...$$restProps} class="btn btn-square btn-ghost h-10" aria-label="Menu" on:click><slot /></button>

<style lang='scss' global >
	.navbar {
		.btn {
			color: rgba(255, 255, 255, .9);
			&:hover {
				color: #fff;
			}
		}
	}
</style>