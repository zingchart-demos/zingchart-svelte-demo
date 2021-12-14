import MainLayout from './layouts/layout.svelte'
import Simple from './components/Simple.svelte'
import Dynamic from './components/Dynamic.svelte'
import Events from './components/Events.svelte'
import License from './components/License.svelte'
import Methods from './components/Methods.svelte'
import ModuleChart from './components/ModuleChart.svelte'
import ModuleDrag from './components/ModuleDrag.svelte'

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