---
title: "Hugo"
date: 2025-05-22
tags: ["hugo"]
draft: false
---
# Hugo

Hugo is a static site generator developed in Go.
You write pure plain markdown text files, and Hugo build the HTML website for you.

### Installing Hugo in your System

In macOS, you can install Hugo using Homebrew.

- `brew update`
- `brew install hugo`

### Creating New Hugo Project

To create a fresh new site, you can use Hugo CLI:

```
hugo new site mysite
cd mysite
```

### Creating New Post

You can create a new post manually by creating the .md file and manually writing the front matter.
Another option is using the Hugo CLI:

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

# PaperMod

PaperMod is just a option of theme for Hugo.

### Adding Theme

To add a theme, you can just clone the repository to `themes/<theme-name>`:

```bash
git clone https://github.com/adityatelange/hugo-PaperMod themes/PaperMod --depth=1
```

Then, update the `hugo.yaml` file to include the theme:

```yaml
theme: ['PaperMod']
```

### Override Theme Files

Copy from `themes/foo/layouts/index.html` and paste it in `layouts/index.html`.
See [Override a Hugo Theme](https://zwbetz.com/override-a-hugo-theme/) for more information.

# Post Content

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

### Inserting md file into current md

{{< includemd "./piece.md" >}}

### Linking between markdown files inside a single post

- Using relref: `{{</* relref "my-post-title" */>}}` to link to another post.
- Using relative link: ` [The link text]``(./my-post-title) ` to link to another post or go-back like `[`Back to Main]`(./)`.

### Images

We can insert images using markdown syntax: `[Image Description](image.png)`.
You can also add an image using `{ {<figure src="image.png" caption="Image Description" class="center" align=center>}}` syntax.
Use `align=center` to center image with captions.

Edit `themes/PaperMod/assets/css/common/post-single.css` to change the default image styling.
You can edit the selector `.post-content img[src*="#center"]` to change the style of images that have the `#center` flag in the src attribute. Or the selector `.post-content figure > figcaption` to change the style of the caption of the images.

### Fonts

You can add Google Fonts header in `public/index.html`.

# Extending

### Modifying Theme

To override PaperMod behavior without touching the theme:
Copy the file from themes/PaperMod/layouts/... to your project’s /layouts/....
Modify it there—Hugo will prioritize your version.

### Modifying CSS

#### Headings

You can adjust h1, h2, h3, etc in `/static/custom.css`.

#### Tags

The HTML file that include the tags at bottom of each page is located at `themes/PaperMod/layouts/_default/single.html`.

#### Post Title 

You can adjust styling of the *title* of the post by updating the selector `.post-title` in `themes/PaperMod/assets/css/common/post-single.css`.

### Modifying the HTML structure

You can add a new HTML element to the post template by updating `themes/PaperMod/layouts/_default/single.html`

### Adding Canvas Support

We can use HTML5 Canvas to draw graphics.
But we first need to update Hugo settings to enable it.

### Adding Latex Support

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


# Under the Hood

Hugo is a static site generator written in Go.
You write your content in markdown files, define templates using themes, and do some configuration in a `hugo.yaml` file.
Then, Hugo will generate a static HTML site for you.

![Hugo](hugo.png#center)

## Markdown Rendering

Hugo uses `Goldmark` as the Markdown parser.
Files with ending with `.md`, `.mdown`, or `.markdown` are processed as Markdown.

Documentation: https://gohugo.io/configuration/markup/

## HTML Templates

Inside the .html files you will notice a template syntax.
Templates use variables, functions, and methods to transform the markdown content into a published page.

Hugo uses the Go [html/template](https://pkg.go.dev/html/template) and [text/template](https://pkg.go.dev/text/template) packages to handle the templates.

Documentation: https://gohugo.io/templates/introduction/

## Directory Structure

#### /hugo.toml

The main configuration file of Hugo.

#### /public/*

Contains the generated site ready to be published.
Once Hugo finishes to build your website from markdown files, it will put the generated HTML files in this folder.

#### /content/*

The content folder contains the markdown files that you write for each post.

#### /static/*

In Hugo, the /static folder is used to store static assets—files that should be served as-is without any processing or templating.
Everything in /static is copied verbatim to the public folder during build.
If you have static/images/logo.png, it will be available at example.com/images/logo.png.

#### /themes/PaperMod

This is the directory where the PaperMod theme is installed in your Hugo project.

#### /layouts/*

Here is where you can override PaperMod behavior without touching the theme files.
You just copy the file from `themes/PaperMod/layouts/...` to `/layouts/...`.
Then you modify the file in `/layouts/...` that Hugo will ignore the theme file.

A fresh Hugo project will have a empty Layout folder.
So Hugo will fallback to the Layout folder inside your theme at /themes/<themename>/layouts/

### Layout Folder

You have a layout folder inside the theme and you in your root folder.

##### /layouts/\_default/baseof.html

This is the root HTML file.
The start point of the published site.
Contains the base template where the other templates inherit from.

It imports `header.html` and `footer.html` partials.

##### /layouts/shortcodes/*

In Hugo, layouts/shortcodes/ is a special directory where you define custom shortcodes (reusable content snippets written in Go template syntax). These are mini-templates that you can call from within your Markdown files.

##### /layouts/partials

Contains the HTML for partial content.
For example, you can add `math.html` to handle math equations using some Latex library like KaTeX.

##### /layouts/\_default

Contains the default layout for the site.

##### /layouts/\_default/\_markup
