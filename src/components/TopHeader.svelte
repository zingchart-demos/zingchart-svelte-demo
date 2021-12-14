<script>
  /*
   * Header
   */
	import NavbarItem from './NavbarItem.svelte'

	export let currentRoute

	const txt = {
		'/': 'Demonstrates a simple chart of static data',
		'/module_chart': 'Demonstrates explicitly importing ZingChart modules',
		'/module_drag': 'Demonstrates interacting with a chart to change data',
		'/dynamic': 'Demonstrates modifying the configuration of an existing chart',
		'/events': 'Demonstrates responding to chart events',
		'/methods': 'Demonstrates using a reference to a ZingChart element to invoke methods on it',
		'/license': 'Demonstrates setting the license key and performance flags on the ZingChart object, as well as multiple plots in one chart'
	}

</script>

<div class="header">
	<h2>zingchart-svelte Demo</h2>
	<div class="buttonbar">
		<NavbarItem {currentRoute} path="/" label="Simple" />
		<NavbarItem {currentRoute} path="/module_chart" label="Module Chart" />
		<NavbarItem {currentRoute} path="/module_drag" label="Module Drag" />
		<NavbarItem {currentRoute} path="/dynamic" label="Dynamic" />
		<NavbarItem {currentRoute} path="/events" label="Events" />
		<NavbarItem {currentRoute} path="/methods" label="Methods" />
		<NavbarItem {currentRoute} path="/license" label="License" />
	</div>
	<h4>{txt[currentRoute.name]}</h4>
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

.buttonbar {
	display: flex;
	flex-direction: row;
}
</style>