<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
    import MaplibreGl from 'maplibre-gl';
	import { MapLibreSearchControl } from '@stadiamaps/maplibre-search-box';
	import '@stadiamaps/maplibre-search-box/dist/style.css';
	const { Map, LngLatBounds } = MaplibreGl;
	import 'maplibre-gl/dist/maplibre-gl.css';
	import { ridingShapeData } from '$lib/geo.svelte';

    let { ridingName }: { ridingName: string } = $props();

	let map: MaplibreGl.Map;
	let mapContainer: HTMLDivElement;

	const colour = '#12A0DB';
	const selectedOpacity = 0.8;
	const unselectedOpacity = 0.25;

	onMount(() => {
		console.log(ridingName);
		const coordinates = ridingShapeData[ridingName].geometry.coordinates[0][0];
		console.log(coordinates[0])
		const bounds = coordinates.reduce((bounds, coord) => {
			return bounds.extend(coord);
		}, new LngLatBounds(coordinates[0], coordinates[0]));
		console.log(bounds)

		const initialState = { lng: -85, lat: 50, zoom: 4 };
		map = new Map({
			container: mapContainer,
			style: `https://basemaps.cartocdn.com/gl/positron-gl-style/style.json`,
			bounds: bounds,
			interactive: false
		});

		map.on('load', () => {
			const district = ridingShapeData[ridingName];
			const index = 0;
			map.addSource(`shape${index}`, {
				type: 'geojson',
				data: district
			});

			map.addLayer({
				id: `shape${index}`,
				type: 'fill',
				source: `shape${index}`,
				layout: {},
				paint: {
					'fill-color': colour,
					'fill-opacity': unselectedOpacity
				}
			});					
		});
	});

	onDestroy(() => {
		if (map) {
			map.remove();
		}
	});
</script>


<div class="map" bind:this={mapContainer}></div>

<style>
	.map {
		@apply lg:size-96 w-full h-80;
	}
</style>