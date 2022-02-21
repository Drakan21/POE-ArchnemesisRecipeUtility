<script>
	export let value = undefined;
</script>

<div class="tool-tip">
	<span class="tt-value">{value}</span>
</div>

<style lang="scss" global>
	.tool-tip {
		z-index: 1000;
		position: absolute;
		padding: 4px 8px;
		background-color: $cBrightRed;
		box-shadow: $cDarkRed;
		border-radius: 4px;
		border: 1px solid $cBlack;
		max-width: 350px;
		display: inline-block;
		font-size: 0.8rem;
		text-transform: uppercase;

		.tt-value {
			color: $cWhite;
		}
	}
</style>
