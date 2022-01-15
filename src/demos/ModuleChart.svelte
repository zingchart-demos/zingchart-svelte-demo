<script>
	/*
	 * Vector map of the 48 US states. Demonstrates explicitly importing
   * ZingChart modules.
   */
  import ZingChart from '@zingsoft/zingchart-svelte'
	import 'zingchart/modules-es6/zingchart-maps.min.js'
	import 'zingchart/modules-es6/zingchart-maps-usa.min.js'

	const config = {
    shapes: [
      {
        type: 'zingchart.maps',
        options: {
          name: 'usa',
          ignore: ['AK', 'HI']
        }
      }
    ]
  }
</script>

<ZingChart data={config} height='600px'/>