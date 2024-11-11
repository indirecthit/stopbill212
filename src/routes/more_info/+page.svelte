<script lang="ts">
	import { CircleArrowRight } from 'lucide-svelte';
    import MoreInfo from '$lib/content/more_info.yaml';

    const links = MoreInfo.links;
</script>

<div class="mx-auto flex grid min-h-screen max-w-4xl grid-rows-[auto_1fr_auto] px-4 lg:px-0">
	<header class="flex w-full py-4">
		<span class="flex-1 font-black"><a href="/">STOP BILL 212</a></span>
		<span class="flex-none"> </span>
	</header>
	<main class="flex flex-grow items-center justify-center p-4">
		<div class="container mx-auto w-full flex-col space-y-4 md:max-w-2xl">
			<h1 class="text-4xl font-black lg:text-6xl">Futher Information</h1>
			<nav class="list-nav">
				<!-- (optionally you can provide a label here) -->
				<ul>
                    {#each links as link}
                        <li>
                            <a href={link.url} target="_blank">
                                <span class="variant-filled badge-icon"><CircleArrowRight /></span>
                                <span class="flex-auto">
                                    <span class="font-bold">{link.title}</span>
                                    <span>{link.description}</span>
                                </span>
                            </a>
                        </li>
                    {/each}
				</ul>
			</nav>
		</div>
	</main>
</div>

<style>
</style>
