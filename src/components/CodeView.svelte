<script>
	import Prism from 'svelte-prismjs'
	import {showCode, modules} from '../stores'

	export let currentRoute

	$: code = $modules[currentRoute.name].code

</script>

{#if $showCode}
	<div class="codeview"><Prism language="svelte" code={code} /></div>
{/if}

<style>

.codeview {
	text-align: left;
	white-space: pre;
	font-family: monospace;
	tab-size: 2;
}

</style>