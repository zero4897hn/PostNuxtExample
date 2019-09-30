import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            { id: '1', title: 'First Post', previewText: 'This is our first post!', thumbnail: 'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_165953143-1300x500.jpeg' },
                            { id: '2', title: 'Second Post', previewText: 'This is our second post!', thumbnail: 'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_165953143-1300x500.jpeg' },
                            { id: '3', title: 'Third Post', previewText: 'This is our third post!', thumbnail: 'https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_165953143-1300x500.jpeg' }
                        ]);
                        resolve ();
                    }, 1500);
                    //reject(new Error);
                });
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts);
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            }
        }
    });
};

export default createStore;