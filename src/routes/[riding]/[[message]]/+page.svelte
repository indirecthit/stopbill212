<script lang="ts">
    import { marked } from 'marked';
    import markedFootnote from 'marked-footnote'
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import ContactForm from '$lib/components/ContactForm.svelte';
    import Explanations from '$lib/content/explanation.yaml';
	import ExplanationIcon from '$lib/components/ExplanationIcon.svelte';
    import Messages from '$lib/content/messages.yaml';
	let { data } = $props();

    let contactForm: HTMLElement;

    let letterContent = $derived.by(() => {
        let email = Messages['default'].email;
        if(data.message) {
            email = Messages[data.message].email;
        }
        console.log(email)
        return email.replace('{riding}', data.riding.riding).replace('{rep}', data.riding.rep).replace('{email}', data.riding.email);
    });
    let ask = $derived.by(() => {
        if(data.message) {
            return Messages[data.message].ask;
        }
        return Messages['default'].ask;
    });
    
    function parseMarkdown(content: string) {
        return marked.use(markedFootnote()).parse(
            content.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/,"")
        );
    }

    function scrollToContact() {
        contactForm.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<svelte:head>
	<title>Contact {data.riding.rep} to Stop Bill 212</title>
</svelte:head>

<div class="w-full flex flex-col lg:flex-row lg:max-w-6xl  pt-16">
    <!-- Left column on desktop, top and bottom on mobile -->
    <div class="w-full lg:w-3/5 flex flex-col space-y-8">
        <!-- Ask section - always at top -->
        <h1 class="lg:text-6xl text-4xl font-black">A Quick Note Can Make a Difference</h1>
        <p>
            {ask}
        </p>
        <button type="button" onclick={scrollToContact} class="btn variant-filled w-full lg:hidden my-4">Contact Your MPP</button>

        <!-- Why Bike Lanes Matter - bottom on mobile, bottom of left column on desktop -->
        <h2 class="h2">Why Bike Lanes Matter</h2>
        <Accordion>
            {#each Explanations.items as explanation}
                <AccordionItem>
                    <svelte:fragment slot="lead"><ExplanationIcon icon={explanation.icon}/></svelte:fragment>
                    <svelte:fragment slot="summary">
                        <span class="font-bold">{explanation.title}</span>
                        <div>{explanation.snippet}</div>
                    </svelte:fragment>
                    <svelte:fragment slot="content">
                        <div class="prose">
                            {@html parseMarkdown(explanation.content)}
                        </div>
                    </svelte:fragment>
                </AccordionItem>
            {/each}                                                      
        </Accordion>
    </div>

    <!-- Right column on desktop, middle on mobile -->
    <div class="w-full lg:w-2/5 lg:pl-4" bind:this={contactForm}>
        <ContactForm {letterContent} rep={data.riding.rep} riding={data.riding.riding} email={data.riding.email} messageType={data.message} />
    </div>
</div>

