import App from './App.svelte'

/* Import the CSS needed by sveltejs-prism */
import 'prismjs/plugins/line-number/prism-line-number.css'
import 'prismjs/plugins/command-line/prism-command-line.css'
import 'prismjs/plugins/line-highlight/prism-line-highlight.css'

import 'prismjs/themes/prism.css'
import 'prismjs/themes/prism-solarizedlight.css'

/* Import the language definition for Svelte. Note that
 * this does not use the Prism from sveltejs-prism, it uses
 * the Prism from the core Prism library.
 */
import Prism from 'prismjs'
import 'prism-svelte'


const app = new App({
	target: document.body,
})

export default app