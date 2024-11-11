<script lang="ts">
	import WhatsApp from '$lib/components/Share/WhatsApp.svelte';
	import Facebook from '$lib/components/Share/Facebook.svelte';
	import Email from '$lib/components/Share/Email.svelte';
	import { clipboard } from '@skeletonlabs/skeleton';
	import { ClipboardCopyIcon } from 'lucide-svelte';

    let { messageType }: {messageType: 'network' | 'conversation'} = $props();

    let messages = {
        network: `Want to make your voice heard about Bill 212? This map helps you connect with Conservative MPs where your friends and family live: stopbill212.org`,
        conversation: `Hey! I found this helpful tool for connecting with MPs about Bill 212. I thought you might be interested: stopbill212.org`
    };
	let url = "https://stopbill212.org";

    function getMessage() {
        return messages[messageType] || messages.network;
    }
</script>

<blockquote class="mb-4 rounded-lg border-l-4 border-primary-500 bg-surface-300 p-4">
    {getMessage()}
</blockquote>
<div class="flex justify-center space-x-4 flex-wrap">
    <WhatsApp {url} title={getMessage()} />
    <Facebook {url} quote={getMessage()} />
    <Email subject="I need your help" body={getMessage()} />
    <button class="variant-outline btn btn-sm" use:clipboard={getMessage()}  data-umami-event="social > Copy">
        <span><ClipboardCopyIcon /></span>
        <span>Copy Message</span>
    </button>                
</div>