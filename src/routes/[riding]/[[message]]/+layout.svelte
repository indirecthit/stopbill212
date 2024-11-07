<script lang="ts">
	let { children } = $props();
</script>


<div class="container mx-auto min-h-screen grid grid-rows-[auto_1fr_auto] flex" >
    <header class="p-4">
		STOP BILL 212
    </header>
    <main class="flex flex-grow justify-center space-y-4">
		    {@render children()}
    </main>
    <footer class="p-4">
        Copyright...
    </footer>
</div>
