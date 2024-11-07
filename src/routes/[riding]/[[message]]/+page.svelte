<script lang="ts">
    import { clipboard } from '@skeletonlabs/skeleton';
	import { BadgeAlert, BadgeDollarSign, Clipboard, House, Mail, Microscope, Pencil, ShoppingCart, Sun } from 'lucide-svelte';
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import ContactForm from '$lib/components/contactForm.svelte';
	let { data } = $props();

    let contactForm: HTMLElement;

    let letterContent = `Dear ${data.riding.rep},
I am writing about the proposed framework requiring provincial approval for municipal bike lanes. This policy raises serious environmental concerns.
The Environmental Bill of Rights establishes our right to a healthful environment. Bike lanes directly support this right by reducing air pollution, decreasing harmful stormwater runoff, and creating safer streets. The proposed framework contradicts these environmental protections by creating unnecessary barriers to sustainable transportation infrastructure.
Municipalities already make informed decisions about local transportation needs based on community and environmental conditions. Adding provincial oversight will only slow their ability to implement evidence-based solutions that benefit both the environment and residents.
I urge you to reconsider this framework and instead support municipalities in developing environmentally responsible transportation networks.
Sincerely,
[Your Name]`

    function scrollToContact() {
        contactForm.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<div class="w-full flex flex-col lg:flex-row">
    <!-- Left column on desktop, top and bottom on mobile -->
    <div class="w-full lg:w-1/2 flex flex-col">
        <!-- Ask section - always at top -->
        <div class="m-4">
            <h2 class="text-2xl font-bold mb-4">An Ask</h2>
            {#if data.message}
                <p>
                    This text should say something about {data.message}.
                </p>
            {/if}
            <p>
                The Ontario government is proposing a framework that would require provincial approval for municipal bike lanes. This policy would create unnecessary barriers to sustainable transportation infrastructure and undermine our right to a healthful environment. We need to act now to protect our communities and the environment.
            </p>
            <button type="button" onclick={scrollToContact} class="btn variant-filled w-full lg:hidden my-4">Contact Your MPP</button>
        </div>

        <!-- Why Bike Lanes Matter - bottom on mobile, bottom of left column on desktop -->
        <div class="m-4">
            <h2 class="text-2xl font-bold mb-4">Why Bike Lanes Matter</h2>
            <Accordion>
                <AccordionItem>
                    <svelte:fragment slot="lead"><Microscope/></svelte:fragment>
                    <svelte:fragment slot="summary">The Research: Bike Lanes Don't Cause Traffic</svelte:fragment>
                    <svelte:fragment slot="content">(content)</svelte:fragment>
                </AccordionItem>
                <AccordionItem>
                    <svelte:fragment slot="lead"><BadgeAlert/></svelte:fragment>
                    <svelte:fragment slot="summary">Lives at Stake: The Safety Crisis</svelte:fragment>
                    <svelte:fragment slot="content">(content)</svelte:fragment>
                </AccordionItem>
                <AccordionItem>
                    <svelte:fragment slot="lead"><ShoppingCart/></svelte:fragment>
                    <svelte:fragment slot="summary">Good for Business, Great for Communities</svelte:fragment>
                    <svelte:fragment slot="content">(content)</svelte:fragment>
                </AccordionItem>  
                <AccordionItem>
                    <svelte:fragment slot="lead"><Sun/></svelte:fragment>
                    <svelte:fragment slot="summary">Environmental and Climate Impact</svelte:fragment>
                    <svelte:fragment slot="content">(content)</svelte:fragment>
                </AccordionItem>      
                <AccordionItem>
                    <svelte:fragment slot="lead"><House/></svelte:fragment>
                    <svelte:fragment slot="summary">Local Democracy Under Attack</svelte:fragment>
                    <svelte:fragment slot="content">(content)</svelte:fragment>
                </AccordionItem>   
                <AccordionItem>
                    <svelte:fragment slot="lead"><BadgeDollarSign/></svelte:fragment>
                    <svelte:fragment slot="summary">Your Tax Dollars at Work – Destroying Infrastructure</svelte:fragment>
                    <svelte:fragment slot="content">(content)</svelte:fragment>
                </AccordionItem>                                                         
            </Accordion>
        </div>
    </div>

    <!-- Right column on desktop, middle on mobile -->
    <div class="w-full lg:w-1/2 lg:pl-4" bind:this={contactForm}>
        <ContactForm {letterContent} rep={data.riding.rep} riding={data.riding.riding} email={data.riding.email} />
    </div>
</div>