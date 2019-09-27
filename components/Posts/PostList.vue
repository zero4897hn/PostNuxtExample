<template>
    <section class="featured-posts">
        <PostPreview id="1" :is-admin="isAdmin" thumbnail="https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_165953143-1300x500.jpeg" title="Hello there!" previewText="This is my first post!" />
        <PostPreview id="2" :is-admin="isAdmin" thumbnail="https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_165953143-1300x500.jpeg" title="Hello there!" previewText="This is my first post!" />
        <PostPreview id="3" :is-admin="isAdmin" thumbnail="https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_165953143-1300x500.jpeg" title="Hello there!" previewText="This is my first post!" />
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview';

export default {
	props: {
		isAdmin: {
			type: Boolean,
			default: false
		}
	},
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