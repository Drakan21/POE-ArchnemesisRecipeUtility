<script>
	import { tokens } from '../stores/tokenStore.js';
	import { favs } from '../stores/detailsStore.js';
	import { tooltip } from '../actions/tooltip.js';

	import TokenIcon from './TokenIcon.svelte';
	import ToolTip from './ToolTip.svelte';

	export let token;

	$: checked = favs.check(token);

	function handleSelect(e) {
		checked = !checked;
		favs.toggle(token);
	}

	function findToken(name) {
		for (const tv in $tokens) {
			if ($tokens[tv].name === name) return $tokens[tv];
		}
	}

	function subcomps(cmps) {
		return cmps.map((e) => findToken(e));
	}
</script>

<div
	class="token-box"
	use:tooltip={{ content: ToolTip, value: token.name }}
	on:click|self|preventDefault={handleSelect}
>
	<TokenIcon token_icon={token.icon} token_name={token.name} {checked} />
</div>

<style lang="scss" global>
	.token-box {
		cursor: pointer;
		display: inline-block;
		width: min-content;
		margin: 1px;
		padding: 1px;
		background-color: rgba(75, 65, 49, 0.5);
		border: 2px solid rgba(14, 14, 14, 0.3);
		border-radius: 5px;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
	}
	.token-box:hover {
		background-color: $cDarkRed;
	}
</style>
