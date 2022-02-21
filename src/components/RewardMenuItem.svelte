<script>
	import { selected } from '../stores/rewardStore.js';
	import { tooltip } from '../actions/tooltip.js';
	import ToolTip from '../components/ToolTip.svelte';

	export let reward;

	function handleSelect() {
		selected.toggle(reward.type.toLowerCase());
	}
</script>

<div
	class="reward-item {$selected.find((e) => e === reward.type.toLowerCase())
		? 'reward-selected'
		: ''}"
	use:tooltip={{ content: ToolTip, value: reward.type }}
	on:click|self|preventDefault={handleSelect}
>
	<img src="../static/icons/rewards/{reward.icon}" alt={reward.type} />
</div>

<style lang="scss" global>
	.reward-item {
		display: inline-block;
		cursor: pointer;
		// border-radius: 15% 15% 0px 0px;
		border-radius: 0px;
		min-height: 25px;
		min-width: 25px;
		padding: 5px 3px 2px 3px;

		.tool-tip {
			background-color: $cDarkGolden;
		}
		img {
			pointer-events: none;
		}
	}
	.reward-item:hover {
		background-color: $cDarkGolden;
		mix-blend-mode: lighten;
	}
	.reward-selected {
		background-color: $cBrightSeaGreen;
	}
	.reward-selected:hover {
		background-color: $cDarkRed;
	}
</style>
