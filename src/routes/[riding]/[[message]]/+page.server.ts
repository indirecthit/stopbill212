import { error } from '@sveltejs/kit';
import { getRidingDetails } from '$lib/districts.svelte';

export function load({ params }) {
    const riding = getRidingDetails(params.riding);

	if (!riding) error(404);

	return {
		riding,
		slug: params.riding,
		message: params.message
	};
}