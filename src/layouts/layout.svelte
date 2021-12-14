<script>
	import {Route} from 'svelte-router-spa'
	import TopHeader from '../components/TopHeader.svelte'

	export let params
	export let currentRoute
</script>

<div class="app">
	<TopHeader {currentRoute} />
	<section class="section">
		<Route {currentRoute} {params} />
	</section>
</div>