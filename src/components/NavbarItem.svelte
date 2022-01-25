<script>
  /*
   * A single button on the navigation bar
   */
	import {Navigate} from 'svelte-router-spa'

	export let path = ''
	export let label = ''
	export let currentRoute

	let isCurrent = false

	$: isCurrent = (currentRoute && path && currentRoute.path === path)
</script>

<Navigate 
	to={path} 
	title={label}
	styles="{isCurrent ? 'navbtn current' : 'navbtn'}">
		{label}
</Navigate>

<style>

:global(.navbtn) {  
	background-color: #1a456d;
  border: none;
  color: white;
  padding: 0.5rem 1.25rem;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: .3rem;
	margin-left: .3rem;
	margin-top: 1rem;
}

:global(.navbtn:visited) {
	text-decoration: none;
	color: white;
}

:global(.navbtn.current) {
	font-weight: bold;
	outline: solid;
	outline-offset: 2px;
	outline-color: #1a456d;
}

:global(.navbtn:not(.current):hover) {
	text-decoration: none;
	box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>