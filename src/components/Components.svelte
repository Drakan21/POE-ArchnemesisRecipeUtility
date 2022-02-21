<script>
	import Component from './Component.svelte';
	export let comp;
</script>

<div class="components-box">
	{#each comp as token}
		<Component {token} />
	{/each}
</div>

<style lang="scss" global>
	.components-box {
		//padding: 8px;
	}
</style>
