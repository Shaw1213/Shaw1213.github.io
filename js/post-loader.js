// Individual post loader
document.addEventListener('DOMContentLoaded', async function() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');

    if (!slug) {
        window.location.href = './';
        return;
    }

    const titleEl = document.getElementById('post-title');
    const dateEl = document.getElementById('post-date');
    const tagsEl = document.getElementById('post-tags');
    const imageEl = document.getElementById('post-image');
    const contentEl = document.getElementById('post-content');

    try {
        // First get post metadata from index
        const indexResponse = await fetch('../posts/index.json');
        if (!indexResponse.ok) throw new Error('Failed to load posts index');

        const posts = await indexResponse.json();
        const postMeta = posts.find(p => p.slug === slug);

        if (!postMeta) {
            contentEl.innerHTML = '<p>Post not found.</p>';
            return;
        }

        // Update page title
        document.title = `${postMeta.title} - Shawn Zhang`;

        // Fetch the markdown file
        const mdResponse = await fetch(`../posts/${slug}.md`);
        if (!mdResponse.ok) throw new Error('Failed to load post content');

        const markdown = await mdResponse.text();

        // Parse frontmatter and content
        const { frontmatter, content } = parseFrontmatter(markdown);

        // Update post header
        titleEl.textContent = frontmatter.title || postMeta.title;

        if (frontmatter.date) {
            const date = new Date(frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            dateEl.textContent = date;
        }

        if (frontmatter.tags && frontmatter.tags.length > 0) {
            tagsEl.innerHTML = frontmatter.tags.map(tag =>
                `<span class="blog-tag">${tag}</span>`
            ).join('');
        }

        if (frontmatter.image) {
            imageEl.src = frontmatter.image.startsWith('/') ? '..' + frontmatter.image : frontmatter.image;
            imageEl.alt = frontmatter.title || '';
            imageEl.style.display = 'block';
        }

        // Render markdown content
        contentEl.innerHTML = marked.parse(content);

    } catch (error) {
        console.error('Error loading post:', error);
        contentEl.innerHTML = '<p>Error loading post. Please try again later.</p>';
    }
});

// Parse YAML frontmatter from markdown
function parseFrontmatter(markdown) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = markdown.match(frontmatterRegex);

    if (!match) {
        return { frontmatter: {}, content: markdown };
    }

    const frontmatterStr = match[1];
    const content = match[2];

    // Simple YAML parser for frontmatter
    const frontmatter = {};
    const lines = frontmatterStr.split('\n');

    for (const line of lines) {
        const colonIndex = line.indexOf(':');
        if (colonIndex === -1) continue;

        const key = line.substring(0, colonIndex).trim();
        let value = line.substring(colonIndex + 1).trim();

        // Remove quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }

        // Parse arrays (simple format: [item1, item2])
        if (value.startsWith('[') && value.endsWith(']')) {
            value = value.slice(1, -1).split(',').map(s => s.trim().replace(/['"]/g, ''));
        }

        frontmatter[key] = value;
    }

    return { frontmatter, content };
}
