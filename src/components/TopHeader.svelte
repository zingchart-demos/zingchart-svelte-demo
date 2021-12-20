<script>
  /*
   * Header
   */
	import NavbarItem from './NavbarItem.svelte'

	export let currentRoute

	const modules = {
		'/': {
			text: 'Demonstrates a simple chart of static data',
			link: 'https://github.com/zingchart-demos/zingchart-svelte-demo/blob/main/src/components/Simple.svelte'
		},
		'/module_chart': {
			text: 'Demonstrates explicitly importing ZingChart modules',
			link: 'https://github.com/zingchart-demos/zingchart-svelte-demo/blob/main/src/components/ModuleChart.svelte'
		},
		'/module_drag': {
			text: 'Demonstrates interacting with a chart to change data',
			link: 'https://github.com/zingchart-demos/zingchart-svelte-demo/blob/main/src/components/ModuleDrag.svelte'
		},
		'/dynamic': {
			text: 'Demonstrates modifying the configuration of an existing chart',
			link: 'https://github.com/zingchart-demos/zingchart-svelte-demo/blob/main/src/components/Dynamic.svelte'
		},
		'/events': {
			text: 'Demonstrates responding to chart events',
			link: 'https://github.com/zingchart-demos/zingchart-svelte-demo/blob/main/src/components/Events.svelte'
		},
		'/methods': {
			text: 'Demonstrates using a reference to a ZingChart element to invoke methods on it',
			link: 'https://github.com/zingchart-demos/zingchart-svelte-demo/blob/main/src/components/Methods.svelte'
		},
		'/license': {
			text: 'Demonstrates setting the license key and performance flags on the ZingChart object, as well as multiple plots in one chart',
			link: 'https://github.com/zingchart-demos/zingchart-svelte-demo/blob/main/src/components/License.svelte'
		},
	}

</script>

<div class="header">
	<h2>zingchart-svelte Demo</h2>
	<div class="buttonbar">
		<NavbarItem {currentRoute} path="/" label="Hello World" />
		<NavbarItem {currentRoute} path="/module_chart" label="US Map" />
		<NavbarItem {currentRoute} path="/module_drag" label="Interaction" />
		<NavbarItem {currentRoute} path="/dynamic" label="Reconfiguring" />
		<NavbarItem {currentRoute} path="/events" label="Events" />
		<NavbarItem {currentRoute} path="/methods" label="Methods" />
		<NavbarItem {currentRoute} path="/license" label="Multiple Plots" />
	</div>
	<h4>{modules[currentRoute.name].text}</h4>
	<div class="viewsrc"><a target="_blank" rel="noreferrer" href={modules[currentRoute.name].link}>View source on Github</a></div>
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