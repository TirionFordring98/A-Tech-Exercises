const Tweeter = function() {
    postIdCounter = 2,
    commentIdCounter = 6,
    posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't worry second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place, what a joke." }
            ]
        }
    ],

    getPosts = function () {
        return posts;
    },

    addPost = function (text) {
        const newPost = {
            text: text,
            id: `p${++postIdCounter}`,
            comments: []
        };
        posts.push(newPost);
    },

    removePost = function (postId) {
        posts = posts.filter(post => post.id !== postId);
    },

    addComment = function (postId, text) {
        const post = posts.find(post => post.id === postId);
        if (post) {
            const newComment = {
                id: `c${++commentIdCounter}`,
                text: text
            };
            post.comments.push(newComment);
        }
    },

    removeComment = function (postId, commentId) {
        const post = posts.find(post => post.id === postId);
        if (post) {
            post.comments = post.comments.filter(comment => comment.id !== commentId);
        }
    
    }
    return {
        addPost : addPost,
        getPosts : getPosts,
        removePost : removePost,
        addComment : addComment,
        removeComment : removeComment,
    }
};

