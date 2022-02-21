<script>
	import { find_tokens } from '../stores/tokenStore.js';
	import TokenIcon from './TokenIcon.svelte';

	import Components from './Components.svelte';
	import RewardIcon from './RewardIcon.svelte';

	export let token;
</script>

<div class="component-details {token.comp.length > 0 ? 'with-sub' : ''}">
	<div class="main-component">
		<span class="token-name">{token.name}</span>
		<div class="comp-header">
			<TokenIcon token_icon={token.icon} token_name={token.name} />
			<div class="rewards-details">
				{#each token.rewards as reward}
					<RewardIcon {reward} small={false} />
				{/each}
			</div>
		</div>
	</div>
	{#if token.comp.length > 0}
		<Components comp={find_tokens(token.comp)} />
	{/if}
</div>

<style lang="scss" global>
	.with-sub {
		background-color: $cBlackOpacity;
		border-radius: 4px;
	}
	.main-component {
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
	}
	.component-details {
		display: inline-flex;
		flex-direction: column;
		justify-content: space-between;
		width: auto;
		margin: 0px 10px;
		align-items: center;

		.comp-header {
			display: flex;
			flex-direction: column;
			align-items: center;

			.rewards-details {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				background-color: rgba(20, 20, 20, 0.4);
				border-radius: 4px;
				border: 0px solid $cDarkGolden;
				height: min-content;
				z-index: 0;
				transform: scale(0.8);
			}
		}

		.token-name {
			font-size: 0.65rem;
			color: $cWhite;
		}
		.icon {
			width: 40px;
			height: 40px;
			z-index: 2;
		}
	}
</style>
