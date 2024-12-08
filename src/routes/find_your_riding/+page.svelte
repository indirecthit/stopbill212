<script lang="ts">
	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	import { ArrowBigRight, CircleHelp } from 'lucide-svelte';

	import { onDestroy, onMount } from 'svelte';
	import { sharedDistrict } from '$lib/districts.svelte';

	import MaplibreGl from 'maplibre-gl';
	import { MapLibreSearchControl } from '@stadiamaps/maplibre-search-box';
	import '@stadiamaps/maplibre-search-box/dist/style.css';
	const { Map, NavigationControl } = MaplibreGl;
	import 'maplibre-gl/dist/maplibre-gl.css';
	import { ridingShapeData } from '$lib/geo.svelte';
	import { goto } from '$app/navigation';

	let map: MaplibreGl.Map;
	let mapContainer: HTMLDivElement;
	let innerHeight = $state(0);
	let headerHeight = $state(0);

	const colour = '#12A0DB';
	const unselectedOpacity = 0.25;

	onMount(() => {
		const sw = new MaplibreGl.LngLat(-94.58272732715515, 42.358198472691555);
		const ne = new MaplibreGl.LngLat(-74.41995913331228, 50.06255144067857);
		const bounds = new MaplibreGl.LngLatBounds(sw, ne);

		map = new Map({
			container: mapContainer,
			style: `https://basemaps.cartocdn.com/gl/positron-gl-style/style.json`,
			bounds: bounds,
		});

		const control = new MapLibreSearchControl();
		map.addControl(control, 'top-left');
		map.addControl(new NavigationControl());
		map.on('load', () => {
			Object.keys(ridingShapeData).forEach((key, index) => {
				const district = ridingShapeData[key];
				map.addSource(`${key}`, {
					type: 'geojson',
					data: district
				});

				map.addLayer({
					id: `${key}`,
					type: 'fill',
					source: `${key}`,
					layout: {},
					paint: {
						'fill-color': colour,
						'fill-opacity': unselectedOpacity
					}
				});
			});
		});

		map.on('click', (e) => {
			const features = map.queryRenderedFeatures(e.point, {
				layers: Object.keys(ridingShapeData).map((key, index) => `${key}`)
			});

            const districtName = features[0].source;
            return goto(`/${districtName}`);
		});
	});

	onDestroy(() => {
		if (map) {
			map.remove();
		}
	});
	function showHelp() {
		const modal: ModalSettings = {
			type: 'alert',
			// Data
			title: 'How to Use This Map',
			body: `
				<div class="prose"><ul>
					<li>Click on any blue-colored region on the map to select a Conservative riding.</li>
					<li>Use the search bar at the top to find your address or city on the map.</li>
				</ul>
				<p>Questions? Email us at <a href="mailto:info@stopbill212.org" class="underline">info@stopbill212.org</a></p>
				</div>
			`
		};
		modalStore.trigger(modal);		
	}	
</script>

<svelte:head>
	<title>Stop Bill 212 - Contact Your MPP</title>
</svelte:head>

<svelte:window bind:innerHeight={innerHeight} />

<div class="mx-auto flex grid h-full max-h-screen max-w-4xl grid-rows-[auto_1fr_auto]">
	<header class="flex w-full p-4 items-center" bind:offsetHeight={headerHeight}>
		<span class="flex-1 font-black"><a href="/">STOP BILL 212</a></span>
		<span class="flex-none flex items-center">
			<button class="btn btn-icon" onclick={showHelp}>
				<span><CircleHelp/></span>
			</button>
		</span>
	</header>
	<main class="flex flex-grow justify-center space-y-4 p-4">
		<div class="map" bind:this={mapContainer} style={`height: ${innerHeight-headerHeight-30}px`}></div>
	</main>
</div>

<style>
	.map {
		@apply w-full;
	}
</style>
