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

After installing Hugo, you can add a theme to your site.

To add a theme, you can just clone the repository to `themes/<theme-name>`:

```bash
git clone https://github.com/adityatelange/hugo-PaperMod themes/PaperMod --depth=1
```

Then, update the `hugo.yaml` file to include the theme:

```yaml
theme: ['PaperMod']
```

Update theme key in `hugo.yaml` to be `theme: ['PaperMod']`.

### Adding New Post

You can create a new post by using a single markdown file.
For bigger posts, you can create a folder with multiple markdown files.

To create a single file post:

```bash
hugo new content content/posts/my-post-title.md
```

To create a folder post with multiple markdown files:

```bash
hugo new content content/posts/my-post-folder/index.md
```

### Troubleshooting

If you are having issues with the generated site, you can try cleaning the destination directory:

```bash
hugo --cleanDestinationDir
```

### Serving Locally

You can run hugo locally with a simple `hugo server` command. Use `--buildDrafts` flag to include posts with `draft: true` in the front matter.

```bash
hugo server --buildDrafts
```

## PaperMod

### Override Theme Files

Copy from `themes/foo/layouts/index.html` and paste it in `layouts/index.html`.
See [Override a Hugo Theme](https://zwbetz.com/override-a-hugo-theme/) for more information.

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

### Linking between markdown files inside a single post

- Using relref: `{{</* relref "my-post-title" */>}}` to link to another post.
- Using relative link: ` [The link text]``(./my-post-title) ` to link to another post or go-back like `[`Back to Main]`(./)`.

### Images

We can insert images using markdown syntax: `[Image Description](image.png)`.
You can also add an image using `{ {<figure src="image.png" caption="Image Description" class="center" align=center>}}` syntax.
Use `align=center` to center image with captions.

Edit `themes/PaperMod/assets/css/common/post-single.css` to change the default image styling.
You can edit the selector `.post-content img[src*="#center"]` to change the style of images that have the `#center` flag in the src attribute. Or the selector `.post-content figure > figcaption` to change the style of the caption of the images.

### Heading

- You can adjust h1, h2, h3, etc in `/static/custom.css`
- You can adjust styling of the post *title* by updating selector `.post-title` in `themes/PaperMod/assets/css/common/post-single.css`.

### Fonts

- You can add Google Fonts header in `public/index.html`

### Post Template

- You can add a new HTML element to the post template by updating `themes/PaperMod/layouts/_default/single.html`

### Canvas

We can use HTML5 Canvas to draw graphics.
But we first need to update Hugo settings to enable it.


### Latex

We can use Latex in markdown files.

#### Matrices

Write the following in your markdown file:

```latex
\\(
\begin{bmatrix}
   a & b \\\\\\
   c & d
\end{bmatrix}
\\)
```
To render the matrix:

\\(
\begin{bmatrix}
a & b \\\\\\
c & d
\end{bmatrix}
\\)

You can also use symbols like `\Theta` to render symbols like the greek letter theta:

Latex syntax:

```latex
\\(
\Theta
\\)
```

Result:

\\(
\Theta
\\)

To strike through text, you can use `\xcancel{text}`:

```latex
\\(
\xcancel{ABC}
\\)
```

Result:

\\(
\xcancel{ABC}
\\)


## Under the Hood

Hugo is a static site generator written in Go.
You write your content in markdown files, define templates using themes, and do some configuration in a `hugo.yaml` file.
Then, Hugo will generate a static HTML site for you.

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
