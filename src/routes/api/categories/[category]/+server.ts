import { readPosts } from "$lib/postReader.js";
import type { Categories, Post } from "$lib/types";
import { json } from "@sveltejs/kit";

const getPostsByCategory = async (category: Categories) => {
    const posts = await readPosts((post: Post) => post.categories.includes(category));
    return posts;
}

export const GET = async ({params}) => {
    const posts = await getPostsByCategory(params.category as Categories); 
    return json(posts);
};

