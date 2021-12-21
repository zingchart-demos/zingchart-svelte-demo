<script>
  /*
   * A bar chart with a button that adds additional data. Demonstrates
	 * using a reference to a ZingChart component.
   */
  import ZingChart from '@zingsoft/zingchart-svelte'

	// This chart
	let chart

	const nValues = 10
	let nSets = 1
	
	// Return an array of `count` random values 
	const randomData = (count) => [...Array(count)].map(() => Math.floor(Math.random() * 10))

	let config = {
		type: 'bar',
		series: [{
			values: randomData(nValues)
		}]
	}

	/*
	 * Add an additional dataset to the existing barchart
	 */
	function addDataset() {
		chart.exec('addplot', {
			data: {
				values: randomData(nValues)
			}
		})

		nSets++
	}

</script>

<div>
	<button on:click={addDataset}>Add dataset {nSets + 1}</button>
	<ZingChart bind:this={chart} data={config} />
</div>