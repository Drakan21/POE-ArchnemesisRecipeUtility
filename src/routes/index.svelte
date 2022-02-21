<script>
	import { onDestroy, onMount } from 'svelte';
	import { url } from '../stores/tokenStore.js';
	import { filter, filtered } from '../stores/filterStore.js';
	import { selected } from '../stores/rewardStore.js';
	import { favs } from '../stores/detailsStore.js';
	import Token from '../components/Token.svelte';
	import TokenDetails from '../components/TokenDetails.svelte';
	import RewardsMenu from '../components/RewardsMenu.svelte';

	onMount(() => {
		$url = '../static/recipes.json';
	});
	onDestroy(() => {
		$url = '';
	});
</script>

<div class="page">
	<h1 class="foot-text">Archnemesis</h1>
	<img class="poe-logo" src="../static/poe_logo.png" alt="Path of Exile: Siege of the Atlas" />
	<div
		class="eater-img"
		src="../static/CharacterArtCutOut_EaterOfWorlds1.png"
		alt="eater-of-worlds"
	/>
	<div class="tokens-view">
		<RewardsMenu />
		<div class="tokens-container">
			<div class="view-header">
				<div class="filter-box">
					<input type="text" name="filter" bind:value={$filter} />
				</div>
			</div>
			{#if $filtered}
				<div class="token-list">
					{#each $filtered as token (token.name)}
						<Token {token} />
					{/each}
				</div>
			{/if}
		</div>
		<div class="tokens-details">
			{#each $favs as fv}
				<TokenDetails token={fv} />
			{/each}
		</div>
	</div>
</div>

<style lang="scss" global>
	.foot-text {
		display: inline;
		width: 100%;
		font-size: 10vw;
		opacity: 0.3;
		padding-left: 20px;
		position: absolute;
		bottom: 10px;
		left: 10px;
		width: fit-content;
		color: $cDarkSeaGreen;
	}
	.view-header {
		display: flex;
		flex-direction: row;
		width: 100%;
	}
	.filter-box {
		width: 100%;
		display: inline-flex;
		flex-direction: row;
		justify-content: flex-end;
		padding: 10px 5px;
		gap: 5px;
		font-size: 1.2rem;
		align-items: center;
		color: $cDarkSeaGreen;

		input {
			height: 28px;
			font-size: 1.2rem;
			padding: 2px 5px;
			border-radius: 4px;
			background-color: $cDarkSeaGreen;
			color: $cBrightSeaGreen;
			border-style: none;
		}
	}

	.poe-logo {
		position: absolute;
		right: 0px;
		bottom: 0px;
		height: 10vh;
		width: auto;
		mix-blend-mode: darken;
		opacity: 0.4;
	}
	.eater-img {
		z-index: -1;
		background: url('../static/CharacterArtCutOut_EaterOfWorlds1.png');
		position: absolute;
		background-size: cover;
		background-position: center center;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		opacity: 0.7;
	}
	.page {
		min-height: 99vh;
		margin: 0px auto;
		position: relative;
		z-index: 0;

		.tokens-container {
			z-index: 50;
			margin: 0px auto;
			max-width: 90vw;
			justify-content: center;
			display: flex;
			flex-direction: column;

			.token-list {
				display: inline-flex;
				flex-wrap: wrap;
				align-items: stretch;
				width: auto;
				margin: 0px auto;
				justify-content: center;
			}
		}
		.tokens-details {
			margin: 50px auto 0px auto;
			max-width: 95vw;
		}
	}
</style>
