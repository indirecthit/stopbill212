<script lang="ts">
	let { children } = $props();
</script>


<div class="container mx-auto min-h-screen grid grid-rows-[auto_1fr_auto] flex" >
    <header class="p-4">
      <span class="flex-1 font-black"><a href="/">STOP BILL 212</a></span>
    </header>
    <main class="flex flex-grow justify-center space-y-4">
		    {@render children()}
    </main>
    <footer class="p-4 text-center">
      Questions? Email us at <a href="mailto:info@stopbill212.org" class="underline">info@stopbill212.org</a>
    </footer>
</div>
