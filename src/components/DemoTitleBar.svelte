<script>
	import {modules} from '../stores'

	export let currentRoute

</script>

<div class="titlebar">
	<span>{$modules[currentRoute.name].text}</span>
	<div class="tooltip">
		<img src="info_icon.png" alt="more info button" />
		<span class="tooltiptext">{$modules[currentRoute.name].info}</span>
	</div>
</div>

<style>

.titlebar {
	color: #4490CF;
	text-align: left; 
	font-weight: bold;
	font-size: 120%;
	margin-top: 1rem;
	margin-left: 3rem;
}

/* Ref: https://www.w3schools.com/css/css_tooltip.asp */
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  font-size: 90%;
  text-align: left;
  width: 25rem;
  background-color: white;
  color: #4490CF;
  padding: .6rem 1rem;
  border-style: solid;
  border-width: 2px;
  border-radius: 6px;
 
  position: absolute;
  top: -10px;
  left: 112%;
  z-index: 100;
}

.tooltip .tooltiptext::after {
  content: " ";
  position: absolute;
  top: 20px;
  right: 100%;
  margin-top: -7px;
  border-width: 7px;
  border-style: solid;
  border-color: transparent #4490CF transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>