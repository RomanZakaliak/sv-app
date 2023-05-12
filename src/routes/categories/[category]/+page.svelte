<script lang="ts">
    import { PostsList } from '$lib/components/custom';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<h4>There is posts with category: &num;{data.params.category}</h4>

<PostsList data={data}/>