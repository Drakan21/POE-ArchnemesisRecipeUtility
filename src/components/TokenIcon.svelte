<script>
	export let token_icon;
	export let token_name;
	export let checked = false;
</script>

<div class="icon">
	<img src="./icons/{token_icon}" alt={token_name} />
	<img class="icon2" src="./icons/{token_icon}" alt={token_name} />
	<input class="token-select" type="checkbox" id="select_{token_name}" {checked} />
</div>

<style lang="scss" global>
	.icon {
		flex: 0 0 auto;
		width: 50px;
		height: 50px;
		background-color: rgba(0, 0, 0, 1);
		border-radius: 100%;
		border: 1px solid rgba(250, 250, 250, 0.35);
		border-style: ridge;
		mix-blend-mode: normal;
		position: relative;
		pointer-events: none;

		img {
			width: 100%;
			height: 100%;
			filter: contrast(1);
			mix-blend-mode: normal;
			pointer-events: none;
		}
		.icon2 {
			position: absolute;
			left: 0;
			top: 0;
			image-rendering: pixelated;
			mix-blend-mode: luminosity;
			pointer-events: none;
		}
		.token-select {
			appearance: none;
			background-color: none;
			//border-color: $cDarkSeaGreen;
			//border: 0.05em solid currentColor;
			border-radius: 50%;
			width: 1em;
			height: 1em;

			display: grid;
			place-content: center;
			pointer-events: none;
			position: absolute;
			left: 2px;
			bottom: 2px;
		}
		.token-select::before {
			content: '';
			width: 1em;
			height: 1em;
			transform: scale(0);
			transition: 120ms transform ease-in-out;
			box-shadow: inset 0.2em -0.2em $cBrightGolden;
			border-radius: 47%;
		}
		.token-select:checked::before {
			transform: scale(1);
		}
	}
</style>
