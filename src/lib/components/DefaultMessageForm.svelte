<script lang="ts">
    import { clipboard } from '@skeletonlabs/skeleton';
	import { ClipboardCopyIcon } from 'lucide-svelte';

    let { ridingName, email }: {ridingName: string, email: string} = $props();
    let selectedMessage = $state('Safety');
	let messageInput: HTMLTextAreaElement;

    const messages: { [key: string]: string } = {
        "Safety": `Hey! I bike to work daily & am worried Bill 212 will make our streets less safe. Please take 1min to tell your MPP (${email}) we need bike lanes, not more danger. More details: https://www.cycleto.ca/stopbill212`,
        "Climate": `The Ford gov wants to rip out bike lanes when we need climate action! Email your MPP (${email}) to oppose Bill 212 - every bike trip helps fight climate change. 🌍🚲 More details: https://`
    };
  </script>
  
<div class="flex flex-col space-y-4">
    <div class="flex flex-row items-start space-x-4">
        <span class="badge-icon p-4 variant-soft-secondary">1</span>
        <span class="flex flex-col space-y-2 w-full">
            <span class="font-bold">Choose type of message</span>
            <select class="select" bind:value={selectedMessage}>
                {#each Object.keys(messages) as key}
                    <option value={key}>{key}</option>
                {/each}
            </select>
        </span>
    </div>
    <div class="flex flex-row items-start space-x-4">
        <span class="badge-icon p-4 variant-soft-secondary">2</span>
        <span class="flex flex-col space-y-2 w-full">
            <span class="font-bold">Copy the message</span>
            <textarea bind:value={messages[selectedMessage]} class="w-full min-h-36 bg-surface-200" readonly={true} bind:this={messageInput} onfocus={() => messageInput.select()}></textarea>
            <button class="variant-outline btn btn-sm flex-grow" use:clipboard={messages[selectedMessage]}>
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