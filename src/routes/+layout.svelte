<script lang="ts">
	import '../app.css';

	import { initializeStores, Modal } from '@skeletonlabs/skeleton';

	initializeStores();

	let { children } = $props();
</script>

<Modal />

{@render children()}