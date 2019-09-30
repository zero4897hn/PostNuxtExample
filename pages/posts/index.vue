<template>
	<div class="posts-page">
		<PostList :posts="loadedPosts" />
	</div>
</template>

<script>
import PostList from '@/components/Posts/PostList';

export default {
	components: {
		PostList
	},
	asyncData(context, callback) {
		setTimeout(() => {
			callback(new Error(), {
				loadedPosts: [
					{ id: '1', title: 'First Post', previewText: 'This is our first post!', thumbnail: 'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_165953143-1300x500.jpeg' },
					{ id: '2', title: 'Second Post', previewText: 'This is our second post!', thumbnail: 'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_165953143-1300x500.jpeg' },
					{ id: '3', title: 'Third Post', previewText: 'This is our third post!', thumbnail: 'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_165953143-1300x500.jpeg' }
				]
			});
		}, 1500);
	}
}
</script>

<style scoped>
.posts-page {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>