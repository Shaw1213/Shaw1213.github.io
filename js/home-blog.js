// Home page blog preview loader
document.addEventListener('DOMContentLoaded', async function() {
    const blogList = document.getElementById('home-blog-list');
    if (!blogList) return;

    try {
        const response = await fetch('posts/index.json');
        if (!response.ok) throw new Error('Failed to load posts index');

        const posts = await response.json();

        if (posts.length === 0) {
            blogList.innerHTML = '<p class="home-blog-loading">No posts yet. Check back soon!</p>';
            return;
        }

        posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        const latestPosts = posts.slice(0, 3);

        blogList.innerHTML = latestPosts.map(post => {
            const date = new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
            const tags = post.tags ? post.tags.map(tag =>
                `<span class="home-blog-tag">${tag}</span>`
            ).join('') : '';

            return `
                <article class="home-blog-card">
                    <h3><a href="blog/post.html?slug=${post.slug}">${post.title}</a></h3>
                    <div class="home-blog-meta">${date}</div>
                    <p>${post.description || ''}</p>
                    ${tags ? `<div class="home-blog-tags">${tags}</div>` : ''}
                </article>
            `;
        }).join('');
    } catch (error) {
        console.error('Error loading blog posts:', error);
        blogList.innerHTML = '<p class="home-blog-loading">Unable to load posts right now.</p>';
    }
});
