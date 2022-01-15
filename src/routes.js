import MainLayout from './layouts/layout.svelte'
import Simple from './demos/Simple.svelte'
import Dynamic from './demos/Dynamic.svelte'
import Events from './demos/Events.svelte'
import License from './demos/License.svelte'
import Methods from './demos/Methods.svelte'
import ModuleChart from './demos/ModuleChart.svelte'
import ModuleDrag from './demos/ModuleDrag.svelte'

const routes = [
	{name: '/', component: Simple, layout: MainLayout},
	{name: 'dynamic', component: Dynamic, layout: MainLayout},
	{name: 'events', component: Events, layout: MainLayout},
	{name: 'license', component: License, layout: MainLayout},
	{name: 'methods', component: Methods, layout: MainLayout},
	{name: 'module_chart', component: ModuleChart, layout: MainLayout},
	{name: 'module_drag', component: ModuleDrag, layout: MainLayout}
]

export {routes}