<script>
	import { find_tokens } from '../stores/tokenStore.js';
	import Component from './Component.svelte';

	export let token;

	$: comp = find_tokens(token.comp);
</script>

<div class="token-details-box">
	<div class="details-header">
		<h1 class="token-header">{token.name}</h1>
		<span class="token-description">{token.description}</span>
		<span class="token-modifier">{token.modifier}</span>
	</div>
	<Component {token} />
</div>

<style lang="scss" global>
	.token-details-box {
		background-color: $cBlackOpacity;
		border: 1px solid $cBlackOpacity;
		border-radius: 0px;
		text-shadow: 1px 1px $cBlack;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.details-header {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.token-header {
				font-family: 'Roboto', sans-serif;
				font-size: 2.2rem;
				display: inline-block;
				color: $cBrightRed;
			}
			.token-description {
				color: $cBrightGolden;
			}
			.token-modifier {
				font-style: italic;
			}
		}
	}
</style>
