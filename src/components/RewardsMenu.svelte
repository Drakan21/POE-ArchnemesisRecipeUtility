<script>
	import { rewards, selected } from '../stores/rewardStore.js';
	import { tooltip } from '../actions/tooltip.js';
	import ToolTip from '../components/ToolTip.svelte';

	import RewardMenuItem from '../components/RewardMenuItem.svelte';
</script>

<div class="rewards-menu">
	<h4>filter by reward</h4>
	{#if $rewards}
		<div class="rewards-list">
			{#each $rewards as reward}
				<RewardMenuItem {reward} />
			{/each}
		</div>
	{/if}
	<div
		use:tooltip={{ content: ToolTip, value: 'clear' }}
		class="clear-btn"
		on:click|self|preventDefault={() => selected.clear()}
	>
		&#10006;
	</div>
</div>

<style lang="scss" global>
	.rewards-menu {
		display: flex;
		width: 100%;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		flex-direction: row;
		gap: 2px;
		margin: 10px auto 5px auto;
		border-bottom: 1px solid $cBrightSeaGreen;
		border-top: 1px solid $cBrightSeaGreen;
		box-shadow: $cDarkSeaGreen 0px 3px 5px;
		background-color: $cBlack;

		h4 {
			text-transform: uppercase;
			font-size: 1.2rem;
			opacity: 0.2;
		}
		.rewards-list {
			display: inline-flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
		}
		.clear-btn {
			font-size: 1.5rem;
			padding: 0px 10px 5px;
			color: $cDarkRed;
		}
		.clear-btn:hover {
			color: $cBrightRed;
			cursor: pointer;
		}
	}
</style>
