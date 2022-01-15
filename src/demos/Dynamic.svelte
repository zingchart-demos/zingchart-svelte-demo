<script>
  /*
   * A dynamically updating line plot. Demonstrates modifying the
   * configuration of an existing ZingChart.
   */
  import {onDestroy, onMount} from 'svelte'
  import ZingChart from '@zingsoft/zingchart-svelte'

  const nValues = 10
  const period = 1000  // milliseconds

  // Return an array of `count` random values 
  const randomData = (count) => [...Array(count)].map(() => Math.floor(Math.random() * 10))

  let config = {
    type: 'line',
    series: [
      {values: randomData(nValues)}
    ]
  }

  /*
   * Set a new random dataset
   */
  function shuffle() {
    config.series = [{values: randomData(nValues)}]
  }

  // Periodically update the chart data
  let interval

  onMount(() => interval = setInterval(shuffle, period))

  onDestroy(() => clearInterval(interval))
</script>

<div>
  <div>{JSON.stringify(config.series[0].values)}</div>
  <ZingChart data={config} />
</div>