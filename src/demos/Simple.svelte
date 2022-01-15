<script>
  /*
   * Simplest demo, just a bar chart of static data
   */
  import ZingChart from '@zingsoft/zingchart-svelte'

	const config = {
		type: 'bar',
		series: [{
			values: [4,5,3,4,5,3,5,4,11]
		}]
	}
</script>

<ZingChart data={config} />