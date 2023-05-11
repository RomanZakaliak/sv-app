import type { Post } from '$lib/types.js';

export const load = async ({ fetch, params }) => {
    const response = await fetch(`/api/categories/${params.category}`);
    const posts: Post[] = await response.json();
    return { posts };
}
