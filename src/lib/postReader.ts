import type { Post } from "./types";

export const readPosts = async (
        filterCallback: (post: Post) => boolean, 
        sortCallback?: (first: Post, second: Post) => number) => {
        
    let posts: Post[] = []; 

    const paths = import.meta.glob('/src/posts/*.md', {
        eager: true
    });
    
    for (const path in paths) {
        const file: any = paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '');

        if (file && typeof(file) === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>;
            const post = { ...metadata, slug, } satisfies Post;
            filterCallback(post) && posts.push(post);
                
        }
    }

    const defaultSort = (first: Post, second: Post) => new Date(second.date).getTime() - new Date(first.date).getTime();

    sortCallback = sortCallback ?? defaultSort;
            
    posts = posts.sort(sortCallback);

    return posts;
}