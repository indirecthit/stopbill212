<script lang="ts">
	import { CircleArrowRight } from "lucide-svelte";

</script>

<div class="mx-auto flex grid min-h-screen max-w-4xl grid-rows-[auto_1fr_auto] px-4 lg:px-0">
	<header class="flex w-full py-4">
		<span class="flex-1 font-black"><a href="/">STOP BILL 212</a></span>
		<span class="flex-none"> </span>
	</header>
	<main class="flex flex-grow items-center justify-center p-4">
		<div class="container mx-auto w-full flex-col space-y-4 md:max-w-2xl">
			<h1 class="lg:text-6xl text-4xl font-black">Futher Information</h1>
            <nav class="list-nav">
                <!-- (optionally you can provide a label here) -->
                <ul>
                    <li>
                        <a href="https://www.youtube.com/watch?v=ZVLgJrI9Cxk">
                            <span class="badge-icon variant-filled"><CircleArrowRight/></span>
                            <span class="flex-auto">Skeleton</span>
                        </a>
                    </li>
                    <!-- ... -->
                </ul>
            </nav>
		</div>
	</main>
</div>

<style>
</style>
