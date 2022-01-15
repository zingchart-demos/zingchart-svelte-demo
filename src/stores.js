/*
 * Globally accessible storage
 */
import {readable, writable, derived} from 'svelte/store'

export const pubDate = writable('')
export const version = writable('')

export const github = readable('https://github.com/zingchart-demos/zingchart-svelte-demo')
export const gitBlob = derived(github, $github => $github + '/blob/main/src/components/')
export const gitIssues = derived(github, $github => $github + '/issues')
export const pricing = readable('https://zingchart.com/pricing')

export const modules = writable({
	'/': {
		label: 'Hello World',
		text: 'Demonstrates a simple chart of static data',
		info: 'Simplest demo, just a ZingChart instance with static data from a constant JavaScript object.',
		file: 'Simple.svelte',
		code: ''
	},
	'/module_chart': {
		label: 'US Map',
		text: 'Demonstrates explicitly importing ZingChart modules',
		info: "In order to display a map, we need to import additional ZingChart modules containing the mapping code and specific map data. In this example we also use Svelte state for the configuration (although we're not changing the state).",
		file: 'ModuleChart.svelte',
		code: ''
	},
	'/module_drag': {
		label: 'Interaction',
		text: 'Demonstrates interacting with a chart to change data',
		info: "Here we obtain a Svelte reference to the ZingChart instance and load the dragging module so we can interact with the data in a bar chart. When a drag operation completes we access the chart data and use it to update the 'Goals met' text above the chart.",
		file: 'ModuleDrag.svelte',
		code: ''
	},
	'/dynamic': {
		label: 'Reconfiguring',
		text: 'Demonstrates modifying the configuration of an existing chart',
		info: "In this example we create an interval timer to periodically update the state object containing the ZingChart's configuration in order to change the data being displayed.",
		file: 'Dynamic.svelte',
		code: ''
	},
	'/events': {
		label: 'Events',
		text: 'Demonstrates responding to chart events',
		info: "This demo shows how we can listen to ZingChart events and log the events to a text area elsewhere on the page. Point to one of the nodes on the plot to see its details appear in the log.",
		file: 'Events.svelte',
		code: ''
	},
	'/methods': {
		label: 'Methods',
		text: 'Demonstrates using a reference to a ZingChart element to invoke methods on it',
		info: "Here we obtain a Svelte reference to the chart and use it to invoke a method (in this case, adding an additional dataset).",
		file: 'Methods.svelte',
		code: ''
	},
	'/license': {
		label: 'Multiple Plots',
		text: 'Demonstrates setting the license key and performance flags on the ZingChart object, as well as multiple plots',
		info: "In this demo we obtain the zingchart instance when we import zingchart/es6 so we can set some configuration options on it, such as the license key. This demo also shows multiple plots on one chart.",
		file: 'License.svelte',
		code: ''
	},
})
