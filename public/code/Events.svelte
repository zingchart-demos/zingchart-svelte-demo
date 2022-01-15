<script>
  /*
   * A line chart with events logged to a text box
   */
  import ZingChart from '@zingsoft/zingchart-svelte'

	const listOfEventListeners = ['complete', 'node_mouseover'];
  //const events = listOfEventListeners.map((value, index) => (<li key={index}>{value}</li>));

  const config = {
    type: 'line',
    series: [{
      values: [4,5,3,4,5,3,5,4,11]
    }]
  }

	let output = ''
	let renderState = 'pending'

  /*
   * Invoked when the chart has finished rendering
   */
  function chartDone() {
		renderState = 'rendered'
  }

  /*
   * Handle the info relating to the node under the cursor
   */
  function nodeInfo(info) {
    delete info.ev;     // Remove the event data
		output = `Node Info\n${JSON.stringify(info,null,2)}\n`
  }
</script>


<div class="wrapper">
	<ZingChart data={config} complete={chartDone} node_mouseover={nodeInfo} />
	<div class="output">
		<h2>Output from events</h2>
		<div class="bound">
			Events bound:
			<ul>
				{#each listOfEventListeners as ev}
					<li>{ev}</li>
				{/each}
			</ul>
		</div>
		<div class="renderState">Chart is {renderState}</div>
		<pre class="nodeInfo">{output}</pre>
	</div>
</div>

<style>
.wrapper {
  display: flex;
  flex-direction: row;
}

.output {
  border: 1px;
  border-style: solid;
  width: 30%;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-right: 1em;
}

.bound {
  margin-left: 1em;
  text-align: left;
}

.bound ul {
  margin-top: 0.5em;
}

.renderState {
  background-color:#c3c3c5;
  color: white;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
}

.nodeInfo {
  margin-left: 1em;
  text-align: left;
}
</style>