<script>
	import ToolTip from './ToolTip.svelte';
	import { tooltip } from '../actions/tooltip.js';

	export let reward;

	export let small = true;

	let selected = false;
</script>

<div class="reward {selected ? 'selected' : ''}">
	{#if reward.modifier > 1 && !small}
		<span class="modifier"><small>&#10006;</small>{reward.modifier}</span>
	{/if}
	<img class="reward-icon" src="./icons/rewards/{reward.icon}" alt={reward.type} />
</div>

<style lang="scss" global>
	.reward {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		padding: 0px;
		box-shadow: $cDarkSeaGreen;

		.modifier {
			letter-spacing: 2px;
			font-size: 0.7rem;
			font-weight: 400;
			color: $cWhite;
		}

		img {
			width: 35px;
			height: 35px;
			filter: contrast(1);
			mix-blend-mode: normal;
			image-rendering: pixelated;
		}
	}
</style>
