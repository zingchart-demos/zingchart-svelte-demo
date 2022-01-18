<script>
	import {pricing, version, pubDate, gitIssues} from '../stores'

</script>

<div class="footer">
	<div class="row1">
		<a href={$pricing} target="_blank" ref="noreferrer">Support ZingChart with a Commercial License (more info...)</a>
		<span class="right">v{$version} Updated {$pubDate}</span>
	</div>
	<div class="row2">
		<a href={$gitIssues} target="_blank" ref="noreferrer" class="right">Report Bug</a>
	</div>
</div>

<style>

.footer {
	color: white;
	width: 100%;
	background-color: #4490CF;
	display: flex;
	flex-direction: column;
	padding: 1.5rem 0;
}

.footer a {
	color: white;
}

.row1 {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 0 1.5rem;
}

.row2 {
	margin: 0 1.5rem;
	text-align: right;
}

.right {
	text-align: right;
}

</style>