<script>
	import {Router} from 'svelte-router-spa'
	import {routes} from './routes'
</script>

<div class="app">
	<Router {routes} />
</div>

<style>

.app {
	text-align: center;
}

</style>