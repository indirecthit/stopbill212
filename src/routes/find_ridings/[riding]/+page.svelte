<script lang="ts">
	import { ArrowBigRight, ArrowBigLeft, BadgeCheck } from 'lucide-svelte';
	import RidingMap from '$lib/components/RidingMap.svelte';
	import { sharedDistrict, ridingsTyped } from '$lib/districts.svelte';
	import { goto } from '$app/navigation';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import DefaultMessageForm from '$lib/components/DefaultMessageForm.svelte';
	import WriteMessageForm from '$lib/components/WriteMessageForm.svelte';

	type Riding = {
		riding: string;
		email: string;
		rep: string;
	};
	type Props = {
		data: {
			riding: Riding;
			slug: string;
		};
	};

	let { data }: Props = $props();
	let tabSet = $state(0);
	let showMap = $state(false);

	function goToNextRiding() {
		if (sharedDistrict.selectedDistricts.length > 0) {
			const nextDistrict = sharedDistrict.getNextDistrict();
			return goto(`/find_ridings/${nextDistrict}`);
		}
	}
	function goToPrevRiding() {
		if (sharedDistrict.selectedDistricts.length > 0) {
			const nextDistrict = sharedDistrict.getPrevDistrict();
			return goto(`/find_ridings/${nextDistrict}`);
		}
	}	
</script>

<div class="mx-auto flex grid min-h-screen max-w-4xl grid-rows-[auto_1fr_auto] px-4 lg:px-0">
	<header class="flex w-full py-4">
		<span class="flex-1 font-black"><a href="/">STOP BILL 212</a></span>
		<span class="flex-none">		
		</span>
	</header>
	<main>
		<div class="flex">
			<h2 class="mb-8 text-2xl flex-grow">
				{data.riding.riding}
			</h2>
			{#if sharedDistrict.selectedDistricts.length > 1}
			<div class="flex-none lg:block hidden">
			<select
				class="select"
				onchange={(event) => {
					const target = event.target as HTMLSelectElement;
					if (target) goto(`/find_ridings/${target.value}`);
				}}
			>
				{#each sharedDistrict.selectedDistricts as district}
					<option value={district} selected={data.slug === district}
						>{ridingsTyped[district].riding}</option
					>
				{/each}
			</select>
			</div>
			{/if}			
		</div>
		<div class="grid grid-cols-1 md:grid-cols-[auto_1fr] lg:space-x-4">
			<div class="w-full flex flex-col space-y-4 lg:space-y-0">
				<button class="btn w-full lg:hidden variant-ringed-secondary" onclick={() => showMap = !showMap}>
					<span>{showMap ? 'Hide Map' : 'Show Map'}</span>
				</button>
				{#key data.slug}
					<div class={showMap ? "visible lg:block" : "hidden lg:block"}>
						<RidingMap ridingName={data.slug} />
					</div>
				{/key}
			</div>
			<div class="">
				<TabGroup>
					<Tab bind:group={tabSet} name="tab1" value={0}>Use default message</Tab>
					<Tab bind:group={tabSet} name="tab2" value={1}>Write your own</Tab>
					<svelte:fragment slot="panel">
						{#if tabSet === 0}
							<DefaultMessageForm ridingName={data.riding.riding} email={data.riding.email} ridingSlug={data.slug}/>
						{:else if tabSet === 1}
							<WriteMessageForm email={data.riding.email} rep={data.riding.rep} ridingSlug={data.slug}/>
						{/if}
					</svelte:fragment>
				</TabGroup>
				{#if sharedDistrict.selectedDistricts.length > 1}
				<div class="flex justify-between space-x-4 mt-8">
					{#if sharedDistrict.currentDistrict > 0}
						<button class="variant-ringed btn" onclick={goToPrevRiding}>
							<span><ArrowBigLeft /></span>
							<span>Previous</span>
						</button>
					{/if}
					<div class="flex-grow"></div>
					{#if sharedDistrict.currentDistrict < sharedDistrict.selectedDistricts.length-1}
						<button class="variant-filled btn" onclick={goToNextRiding}>
							<span>Next</span>
							<span><ArrowBigRight /></span>
						</button>
					{:else}
						<a class="variant-filled btn" href="/share">
							<span><BadgeCheck/></span>
							<span>Finish</span>
						</a>
					{/if}
				</div>
				{/if}					
			</div>			
		</div>	
	</main>
</div>

<style>
</style>
