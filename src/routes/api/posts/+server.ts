import { json } from "@sveltejs/kit";
import type { Post } from "$lib/types";
import { readPosts } from "$lib/postReader";

const getPosts = async () => {
    const posts = await readPosts((post: Post) => post.published);
    return posts;
}

export const GET = async () => {
    const posts = await getPosts(); 
    return json(posts);
};