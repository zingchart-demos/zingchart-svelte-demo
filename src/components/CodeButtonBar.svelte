<script>
	import {showCode, gitBlob, modules} from '../stores'

	export let currentRoute

	$: src = $gitBlob + $modules[currentRoute.name].file

</script>

<div class="buttonbar">
	<div class="left">
		<button class="sourcebtn" on:click={() => $showCode = !$showCode}>{$showCode ? 'Hide' : 'Show'} Source</button>
	</div>
	<div class="right">
		<button class="sourcebtn" on:click={() => window.open(src, '_blank')}>View source on GitHub</button>
	</div>
</div>

<style>

.buttonbar {
	display: flex;
	flex-direction: row;
	align-items: stretch;
	justify-content: space-around;
	margin-bottom: .5rem;
}

.sourcebtn {
  background-color: #1a456d;
  border: none;
  color: white;
  padding: 0.5rem 1.25rem;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 1rem;
}

.sourcebtn:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}


</style>