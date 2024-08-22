import { createClient } from '@sanity/client';
import { SANITY_TOKEN, SANITY_PROJECT_ID, SANITY_DATASET } from '$env/static/private';

export const client = createClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	token: SANITY_TOKEN,
	useCdn: true,
	apiVersion: '2023-02-19'
});
