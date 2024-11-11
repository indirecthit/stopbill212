<script>
	import ShareMessage from "$lib/components/ShareMessage.svelte";

	// Your script here

	import { Search, UserSearch, Newspaper } from "lucide-svelte";

</script>



	<div class="container mx-auto w-full md:max-w-2xl flex-col space-y-8 pt-16">
        <h1 class="lg:text-6xl text-4xl font-black">STOP BILL 212</h1>
        <p>
            Bill 212 would take away local communities' ability to build the safe, vibrant streets we all want. The bill requires provincial approval for bike lanes and mandates removing existing lanes on major roads that help families, seniors and children travel safely. Together, we can keep decisions about our neighborhood streets where they belong - in our communities.
        </p>
		<div class="w-full flex-col space-y-4">
			<h2 class="h3">Help Us Connect With Conservative Ridings</h2>
            <p>
                Do you have friends or family living in Conservative ridings? Their voices are especially powerful in helping MPPs understand how safe streets benefit everyone. Use our simple tool to find your connections in key districts and share why protecting local street safety matters to you.
            </p>
			<a class="btn-primary variant-filled btn w-full md:w-auto text-wrap" href="/find_ridings">
                <span><Search/></span>
                <span>Find Friends & Family in Conservative Ridings</span>
            </a>
		</div>
		<div class="w-full flex-col space-y-4">
			<h2 class="h3">Live in a Conservative Riding? Your Voice Matters Most</h2>
            <p>
                Your MPP needs to hear directly from constituents like you about keeping our streets safe for everyone. Whether you drive, walk, or bike, share your perspective on why local communities should be able to design streets that work for their unique needs.
            </p>
            <a class="btn-primary variant-filled btn  w-full md:w-auto" href="/find_your_riding">
                <span><UserSearch/></span>
                <span>Contact Your MPP</span>
            </a>
		</div>
        <div class="w-full flex-col space-y-4">
			<h2 class="h3">Share</h2>
            <p>When we connect with friends and family about issues that matter, positive change happens
                naturally. Share this tool to help others join the conversation about Bill 212.</p>            
            <ShareMessage messageType="network" />
		</div>        
        <div class="w-full flex-col space-y-4">
			<h2 class="h3">Further Information</h2>
            <p>Find further informatiioin, including articles, research studies, and expert opinions on the bill and its implications.</p>
            <a class="btn-primary variant-filled btn  w-full md:w-auto" href="/more_info">
                <span><Newspaper/></span>
                <span>More Information</span>
            </a>
		</div>        
	</div>