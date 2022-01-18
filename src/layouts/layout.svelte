<script>
	import {Route} from 'svelte-router-spa'
	import TopHeader from '../components/TopHeader.svelte'
	import TopButtonBar from '../components/TopButtonBar.svelte'
	import DemoTitleBar from '../components/DemoTitleBar.svelte'
	import CodeButtonBar from '../components/CodeButtonBar.svelte'
	import CodeView from '../components/CodeView.svelte'
	import Footer from '../components/Footer.svelte'

	export let params
	export let currentRoute
</script>

<div class="app">
	<section class="header">
		<TopHeader {currentRoute} />
		<TopButtonBar {currentRoute} />
	</section>
	<section class="section">
		<DemoTitleBar {currentRoute} />
		<Route {currentRoute} {params} />
	</section>
	<section>
		<CodeButtonBar {currentRoute} />
		<CodeView {currentRoute} />
	</section>
	<section class="footer">
		<Footer {currentRoute} />
	</section>
</div>