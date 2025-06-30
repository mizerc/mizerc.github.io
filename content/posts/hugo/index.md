---
title: "Hugo"
date: 2025-05-22
tags: ["hugo"]
draft: false
---

## Setup

### Installation

In macOS, you can install Hugo using Homebrew:

- `brew update`
- `brew install hugo`

### Adding Theme

To add a theme, you can just clone the repository and update the `hugo.yaml` file to include the theme.

```
git clone https://github.com/adityatelange/hugo-PaperMod themes/PaperMod --depth=1
```

Update theme key in `hugo.yaml` to be `theme: ['PaperMod']`.

### Adding New Post

To create a new post, you can use the `hugo new` command.

```text
// Single file post
hugo new content content/posts/my-post-title.md

// Folder post with multiple markdown files
hugo new content content/posts/my-post-folder/index.md
```

### Troubleshooting

- `hugo --cleanDestinationDir`

### Modifying the Theme

- You can adjust h1, h2, h3, etc. in `/static/custom.css`
- You can add Google Fonts header in `public/index.html`
- You can adjust styling of the post *title* by updating selector `.post-title` in `themes/PaperMod/assets/css/common/post-single.css`.
- You can add a new HTML element to the post template by updating `themes/PaperMod/layouts/_default/single.html`

## Running

### Serving Locally

```
hugo server --buildDrafts
```

Use `--buildDrafts` flag to include posts with `draft: true`.

## Post Content

### Front Matter

You only need the YAML front matter (--- and ---) in the pages you want Hugo to render as separate content.

```text
---
date: '2025-01-01'
title: 'Post Title'
tags: ['tag1', 'tag2']
draft: false
---
```

### Linking between md files inside a single post

- Using relref: `{{</* relref "my-post-title" */>}}` to link to another post.
- Using relative link: ` [The link text]``(./my-post-title) ` to link to another post or go-back like `[`Back to Main]`(./)`.

### Images

We can use images in markdown files.
We can use the `[Image Description](image.png)` syntax to add an image.

### Latex

We can use Latex in markdown files.

#### Matrix

```latex
\\(
\begin{bmatrix}
   a & b \\\\\\
   c & d
\end{bmatrix}
\\)
```

\\(
\begin{bmatrix}
a & b \\\\\\
c & d
\end{bmatrix}
\\)

### Symbols

```latex
\\(
\Theta
\\)
```

\\(
\Theta
\\)

```latex
\\(
\xcancel{ABC}
\\)

```

\\(
\xcancel{ABC}
\\)

### HTML5 Canvas

We can use HTML5 Canvas to draw graphics.
But we first need to update Hugo settings to enable it.

## Introduction

Hugo is a static site generator written in Go.

![Hugo](hugo.png#center)

### Markdown Rendering

Hugo uses `Goldmark` as the Markdown parser.
Files with ending with `.md`, `.mdown`, or `.markdown` are processed as Markdown.

Documentation: https://gohugo.io/configuration/markup/

### HTML Templates

Inside the .html files you will notice a template syntax.
Templates use variables, functions, and methods to transform the markdown content into a published page.

Hugo uses the Go [html/template](https://pkg.go.dev/html/template) and [text/template](https://pkg.go.dev/text/template) packages to handle the templates.

Documentation: https://gohugo.io/templates/introduction/

### Directory Structure

#### /hugo.toml

Contains the configuration for the site.

#### /public

Contains the generated site ready to be published.

#### /content

The content folder contains the content as markup files (markdown) and assets of your site.

#### /layouts

Contains the HTML templates for the site.

#### /layouts/\_default/baseof.html

The parent template.
The index.html file content.
The start point of the published site.
Contains the base template where the other templates inherit from.

It imports `header.html` and `footer.html` partials.

#### /layouts/partials

Contains the HTML for partial content.
For example, you can add `math.html` to handle math equations using some Latex library like KaTeX.

#### /layouts/\_default

Contains the default layout for the site.

#### /layouts/\_default/\_markup
