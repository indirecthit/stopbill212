<script lang="ts">
    import { clipboard } from '@skeletonlabs/skeleton';
	import { ClipboardCopyIcon } from 'lucide-svelte';
    import Messages from '$lib/content/messages.yaml';
	import WhatsApp from '$lib/components/Share/WhatsApp.svelte';
	import Facebook from '$lib/components/Share/Facebook.svelte';
	import Email from '$lib/components/Share/Email.svelte';

	let shareNetworkMessage = `Want to make your voice heard about Bill 212? This map helps you connect with Conservative MPs where your friends and family live: stopbill212.org`;
	let shareConversationMessage = `Hey! I found this helpful tool for connecting with MPs about Bill 212. I thought you might be interested: stopbill212.org`;
	let url = "https://stopbill212.org";
</script>

<div class="mx-auto flex grid min-h-screen max-w-4xl grid-rows-[auto_1fr_auto] px-4 lg:px-0">
	<header class="flex w-full py-4">
		<span class="flex-1 font-black"><a href="/">STOP BILL 212</a></span>
		<span class="flex-none"> </span>
	</header>
	<main class="flex flex-grow items-center justify-center p-4">
		<div class="container mx-auto w-full flex-col space-y-4 md:max-w-2xl">
			<h1 class="lg:text-6xl text-4xl font-black">Help Others Join the Conversation</h1>

			<p>
				When we connect with friends and family about issues that matter, positive change happens
				naturally. Share this tool to help others join the conversation about Bill 212.
			</p>

			<h2 class="h3">Share With Your Network</h2>
			<blockquote class="mb-4 rounded-lg border-l-4 border-primary-500 bg-surface-300 p-4">
				Want to make your voice heard about Bill 212? This map helps you connect with Conservative
				MPs where your friends and family live: stopbill212.org
			</blockquote>
			<div class="flex justify-center space-x-4 flex-wrap">
				<WhatsApp {url} title={shareNetworkMessage} />
				<Facebook {url} quote={shareNetworkMessage} />
				<Email subject="I need your help" body={shareNetworkMessage} />
				<button class="variant-outline btn btn-sm" use:clipboard={shareNetworkMessage}  data-umami-event="social > Copy">
					<span><ClipboardCopyIcon /></span>
					<span>Copy Message</span>
				</button>                
			</div>
			<h2 class="h3 pt-4">Start a Conversation</h2>
			<p>
				Reach out to friends and family in Conservative ridings. A simple message can make a big
				difference:
			</p>
			<blockquote class="mb-4 rounded-lg border-l-4 border-primary-500 bg-surface-300 p-4">
				Hey! I found this helpful tool for connecting with MPs about Bill 212. 
				I thought you might be interested: stopbill212.org
			</blockquote>
			<div class="flex flex-row justify-center space-x-4">
				<WhatsApp {url} title={shareConversationMessage} />
				<Facebook {url} quote={shareConversationMessage} />
				<Email subject="I need your help" body={shareConversationMessage} />
				<button class="variant-outline btn btn-sm" use:clipboard={shareConversationMessage}  data-umami-event="social > Copy">
					<span><ClipboardCopyIcon /></span>
					<span>Copy Message</span>
				</button>                
			</div>
		</div>
	</main>
</div>

<style>
</style>
