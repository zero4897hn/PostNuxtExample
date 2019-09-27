<template>
    <section class="featured-posts">
        <PostPreview id="1" thumbnail="https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_165953143-1300x500.jpeg" title="Hello there!" previewText="This is my first post!" />
        <PostPreview id="2" thumbnail="https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_165953143-1300x500.jpeg" title="Hello there!" previewText="This is my first post!" />
        <PostPreview id="3" thumbnail="https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_165953143-1300x500.jpeg" title="Hello there!" previewText="This is my first post!" />
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview';

export default {
	components: {
		PostPreview
	}
}
</script>

<style scoped>
.featured-posts {
	display: flex;
	padding: 20px;
	box-sizing: border-box;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
}
</style>