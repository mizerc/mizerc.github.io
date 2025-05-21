---
date: '2025-05-21'
draft: false
title: 'My 1st Post'
tag: ['Hugo']
---

This is my first Hugo post.

### Adding Theme

`git clone https://github.com/adityatelange/hugo-PaperMod themes/PaperMod --depth=1`

### Adding New Post

`hugo new content content/posts/my-post-title.md`

### Serving Locally

```
hugo server --buildDrafts
```

Use `--buildDrafts` flag to include posts with `draft: true`.