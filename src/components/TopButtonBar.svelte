<script>
	import {modules} from '../stores'
	import NavbarItem from './NavbarItem.svelte'

	export let currentRoute

</script>

<div class="buttonbar">
	{#each Object.entries($modules) as [path, mod]}
		<NavbarItem {currentRoute} path={path} label={mod.label} />
	{/each}
</div>

<style>

.buttonbar {
	width: 100%;
	background-color: #4490CF;
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding: 1.5rem;
}

</style>