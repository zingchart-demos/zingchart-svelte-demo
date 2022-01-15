<script>
	import {onMount} from 'svelte'
	import {Router} from 'svelte-router-spa'
	import {routes} from './routes'
	import {modules, pubDate, version} from './stores'

	// Load all of the code files and the
  // publish-info file
  async function getCodeAndInfo() {
    try {
      for(let [path, mod] of Object.entries($modules)) {
        const resp = await fetch('code/' + mod.file)
        $modules[path].code = await resp.text()
      }

      const resp = await fetch('publish-info.json')
      const info = await resp.json()

			$pubDate = info.date
      $version = info.version
    } catch(err) {
      console.log(err)
    }
  }

	onMount(() => getCodeAndInfo())

</script>

<div class="app">
	<Router {routes} />
</div>

<style>

.app {
	text-align: center;
}

</style>