<script lang="ts">
	let { children } = $props();
</script>


<div class="min-h-screen flex flex-col" >
    <main class="flex-grow items-center justify-center flex p-4">
		{@render children()}
    </main>
    <footer class="p-4 text-center">
        Questions? Email us at <a href="mailto:ABC" class="underline">ABC@stopbill212.org</a>
    </footer>
</div>
