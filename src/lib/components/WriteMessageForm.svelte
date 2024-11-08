<script lang="ts">
	import { clipboard } from '@skeletonlabs/skeleton';
	import { ClipboardCopyIcon } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let url = $state('');
	onMount(() => {
		const { hostname } = window.location;
		url = `https://${hostname}/${ridingSlug}`;
	});

	let { email, rep, ridingSlug }: { email: string; rep: string, ridingSlug: string } = $props();
</script>

<div class="flex flex-col space-y-4">
	<p>Copy the details below and send to your friends and family.</p>
	<label class="label">
		<span class="font-bold">MPP Name</span>
		<div class="input-group input-group-divider grid-cols-[1fr_auto]">
			<input type="text" value={rep} readonly={true} />
			<button use:clipboard={rep}><ClipboardCopyIcon /></button>
		</div>
	</label>
	<label class="label">
		<span class="font-bold">MPP Email</span>
		<div class="input-group input-group-divider grid-cols-[1fr_auto]">
			<input type="text" value={email} readonly={true} />
			<button use:clipboard={email}><ClipboardCopyIcon /></button>
		</div>
	</label>
	<label class="label">
		<span class="font-bold">Info Page</span>
		<div class="input-group input-group-divider grid-cols-[1fr_auto]">
			<input type="text" value={url} readonly={true} />
			<button use:clipboard={url}><ClipboardCopyIcon /></button>
		</div>
	</label>
</div>
