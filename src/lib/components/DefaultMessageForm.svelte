<script lang="ts">
    import { clipboard } from '@skeletonlabs/skeleton';
	import { ClipboardCopyIcon } from 'lucide-svelte';
    import Messages from '$lib/content/messages.yaml';

    let { ridingName, email }: {ridingName: string, email: string} = $props();
    let selectedMessage = $state('default');
	let messageInput: HTMLTextAreaElement;

    let message = $derived.by(() => {
        const m = Messages[selectedMessage].sms;
        return m.replace('{riding}', ridingName).replace('{email}', email);
    });
  </script>
  
<div class="flex flex-col space-y-4">
    <div class="flex flex-row items-start space-x-4">
        <span class="badge-icon p-4 variant-soft-secondary">1</span>
        <span class="flex flex-col space-y-2 w-full">
            <span class="font-bold">Choose type of message</span>
            <select class="select" bind:value={selectedMessage}>
                {#each Object.keys(Messages) as key}
                    <option value={key}>{Messages[key].title}</option>
                {/each}
            </select>
        </span>
    </div>
    <div class="flex flex-row items-start space-x-4">
        <span class="badge-icon p-4 variant-soft-secondary">2</span>
        <span class="flex flex-col space-y-2 w-full">
            <span class="font-bold">Copy the message</span>
            <textarea class="w-full min-h-36 bg-surface-200" readonly={true} bind:this={messageInput} onfocus={() => messageInput.select()}>
{message}                
            </textarea>
            <button class="variant-outline btn btn-sm flex-grow" use:clipboard={message}>
                <span><ClipboardCopyIcon /></span>
                <span>Copy Message</span>
            </button>
        </span>
    </div>
    <div class="flex flex-row items-start space-x-4">
        <span class="badge-icon p-4 variant-soft-secondary">3</span>
        <div>
            Send to family and friends who live in the {ridingName} riding
        </div>
    </div>					
</div>