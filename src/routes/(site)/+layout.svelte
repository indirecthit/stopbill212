<script lang="ts">
	let { children } = $props();
</script>


<div class="container mx-auto min-h-screen grid grid-rows-[auto_1fr_auto] flex" >
    <header class="p-4">
		STOP BILL 212
    </header>
    <main class="p-4 space-y-4 flex-grow">
		{@render children()}
    </main>
    <footer class="p-4">
        Copyright...
    </footer>
</div>
