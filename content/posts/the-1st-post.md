---
date: '2025-05-21'
draft: false
title: 'The 1st Post'
tag: ['Hugo']
---

This is my first attempt using [Hugo](https://gohugo.io/) to generate this website from plain markdown.

### Installing Hugo (MacOS)

- `brew update`
- `brew install hugo`

### Adding Theme

- `git clone https://github.com/adityatelange/hugo-PaperMod themes/PaperMod --depth=1`

Update `hugo.yaml` to include `theme: ['PaperMod']`.

### Adding New Post

- `hugo new content content/posts/my-post-title.md`

### Troubleshooting

- `hugo --cleanDestinationDir`

### Serving Locally

```
hugo server --buildDrafts
```

Use `--buildDrafts` flag to include posts with `draft: true`.