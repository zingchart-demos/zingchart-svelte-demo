<script>
	import {github} from '../stores'

	export let currentRoute

</script>

<div class="header">
	<div class="icon">
		<a href="https://zingchart.com" target="_blank" rel="noreferrer"><img src="logo.png" alt = "ZingChart logo"/></a>
	</div>
	<h2>ZingChart Svelte Demo</h2>
	<div class="icon right">
		<a href={$github} target="_blank" rel="noreferrer"><img src="github.png" alt="Github logo"/></a>
	</div>
</div>

<style>

.header {
	width: 100%;
	font-size: 120%;
	background-color: white;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: stretch;
	text-align: center;
	color: #4490CF;
}

.icon {
	width: 150px;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
}

.right {
	text-align: right;
	padding-top: 1.5rem;
}
 </style>