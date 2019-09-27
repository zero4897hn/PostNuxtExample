<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post='loadedPost' />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm';

export default {
    layout: 'admin',
    components: {
        AdminPostForm
    },
    data() {
        return {
            loadedPost: {
                author: 'Kobayashi Zero',
                title: 'My awesome post',
                content: 'Super amazing, thanks for that!',
                thumbnailLink: 'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_165953143-1300x500.jpeg'
            }
        }
    }
}
</script>

<style scoped>
.update-form {
    width: 90%;
    margin: 20px auto;
}
@media (min-width: 768px) {
    .update-form {
        width: 500px;
    }
}
</style>