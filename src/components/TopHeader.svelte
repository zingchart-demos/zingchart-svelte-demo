<script>
	import {modules} from '../stores'

  /*
   * Header
   */
	import NavbarItem from './NavbarItem.svelte'

	export let currentRoute

</script>

<div class="header">
	<h2>zingchart-svelte Demo</h2>
	<div class="buttonbar">
		{#each Object.entries($modules) as [path, mod]}
			<NavbarItem {currentRoute} path={path} label={mod.label} />
		{/each}
	</div>
	<h4>{$modules[currentRoute.name].text}</h4>
	<div class="viewsrc"><a target="_blank" rel="noreferrer" href={$modules[currentRoute.name].link}>View source on Github</a></div>
</div>

<style>

.header {
	background-color: #c3c3c5;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 120%;
	color: rgb(92,91,91);
}

.header h2 {
	color: #4CAF50;
}

.header h4 {
	margin-bottom: 0px;
}

.viewsrc {
	margin-top: 0px;
	background-color: #4CAF50;
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  border-radius: 8px;
  text-decoration: none;
	margin-top: 0.5em;
	margin-bottom: 1em;
}

.viewsrc a {
	color: white;
}

.buttonbar {
	display: flex;
	flex-direction: row;
}
</style>