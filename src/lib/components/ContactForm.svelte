<script lang="ts">
	import { clipboard } from '@skeletonlabs/skeleton';
	import {
		Clipboard,
		Mail
	} from 'lucide-svelte';
	import Messages from '$lib/content/messages.yaml';
	import { goto } from '$app/navigation';

	type Props = {
		messageType: string;
		rep: string;
		riding: string;
		email: string;
	};

	let { messageType = 'default', rep, riding, email }: Props = $props();

	let selectedMessage = $state(messageType);
	let emailCopy = $derived.by(() => {
        let email = Messages[selectedMessage].email;
        return email.replace('{riding}', riding).replace('{rep}', rep).replace('{email}', email);
    });


	let mailTohref = $derived.by(() => {
		const subject = "I do not support Bill 212"
        return encodeURI(`mailto:?subject=${subject}&body=${emailCopy}`);
    });	

    let emailInput: HTMLInputElement;
</script>

<div class="m-4 flex-col space-y-4">
	<h2 class="mb-4 text-2xl font-bold">Contact {rep} ({riding})</h2>
	<label class="label">
		<span>Contact Email</span>
		<div class="input-group input-group-divider grid-cols-[1fr_auto]">
			<input
				class="input"
				title="Input (text)"
				type="text"
				bind:value={email}
                bind:this={emailInput}
				onfocus={() => emailInput.select()}
				readonly={true}
			/>
			<button class="btn-primary variant-filled btn" use:clipboard={email}><Clipboard /></button>
		</div>
	</label>
	<label class="label">
		<span>Choose type of message</span>
		<select class="select" bind:value={selectedMessage} >
			{#each Object.keys(Messages) as key}
				<option value={key}>{Messages[key].title}</option>
			{/each}
		</select>	
	</label>
	<label class="label">
		<div class="flex items-end">
			<span class="flex-grow">Message</span>
			<!-- <button class="btn btn-sm variant-filled" use:clipboard={data.riding.email}>
                <span><Pencil/></span>
                <span>Customize Message</span>
            </button> -->
		</div>
		<textarea class="h-48 w-full p-4" value={emailCopy}></textarea>
	</label>
	<div class="flex space-x-4">
		<a href={mailTohref} class="variant-filled-primary btn btn-sm flex-grow" target="_blank"  data-umami-event="contact_form > send">
			<span><Mail /></span>
			<span>Send Message</span>
		</a>
		<button class="variant-outline btn btn-sm flex-grow" use:clipboard={emailCopy} data-umami-event="contact_form > copy">
			<span><Clipboard /></span>
			<span>Copy Message</span>
		</button>
	</div>
</div>
