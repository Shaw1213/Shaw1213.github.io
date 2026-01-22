// Blog listing loader
document.addEventListener('DOMContentLoaded', async function() {
    const blogList = document.getElementById('blog-list');
    if (!blogList) return;

    try {
        const response = await fetch('../posts/index.json');
        if (!response.ok) throw new Error('Failed to load posts index');

        const posts = await response.json();

        if (posts.length === 0) {
            blogList.innerHTML = `
                <div class="blog-empty">
                    <h2>No posts yet</h2>
                    <p>Check back soon for new content!</p>
                </div>
            `;
            return;
        }

        // Sort posts by date (newest first)
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Render posts
        blogList.innerHTML = posts.map(post => {
            const date = new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            const tags = post.tags ? post.tags.map(tag =>
                `<span class="blog-tag">${tag}</span>`
            ).join('') : '';

            return `
                <article class="blog-post-card">
                    <h2><a href="post.html?slug=${post.slug}">${post.title}</a></h2>
                    <div class="blog-post-meta">
                        <span>${date}</span>
                    </div>
                    <p class="description">${post.description || ''}</p>
                    ${tags ? `<div class="blog-post-tags">${tags}</div>` : ''}
                </article>
            `;
        }).join('');

    } catch (error) {
        console.error('Error loading blog posts:', error);
        blogList.innerHTML = `
            <div class="blog-empty">
                <h2>No posts yet</h2>
                <p>Check back soon for new content!</p>
            </div>
        `;
    }
});
