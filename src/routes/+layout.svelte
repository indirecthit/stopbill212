<script lang="ts">
	import '../app.css';

	import { initializeStores, Modal } from '@skeletonlabs/skeleton';
	import { UmamiAnalytics } from '@lukulent/svelte-umami';

	initializeStores();

	let { children } = $props();
</script>

<UmamiAnalytics
	websiteID="cc1c52f7-ed58-4365-adbd-e6955fcb59da"
	srcURL="https://cloud.umami.is/script.js"
/>

<Modal />

{@render children()}