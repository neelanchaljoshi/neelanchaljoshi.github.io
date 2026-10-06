# neelanchaljoshi.github.io

Source for my personal website — **[neelanchaljoshi.github.io](https://neelanchaljoshi.github.io)**.

A Jekyll site built on the [al-folio](https://github.com/alshedivat/al-folio) theme. It holds my about page, publications, projects, CV, teaching, and an archive of the pub quizzes I host.

## Where things live

| What | Where |
|---|---|
| About / homepage text | `_pages/about.md` |
| Site config (name, email, social links, nav) | `_config.yml` |
| Project pages | `_projects/*.md` |
| Publications | `_bibliography/papers.bib` (rendered by `jekyll-scholar`) |
| CV | `_data/cv.yml` and the PDF in `assets/pdf/` |
| Repositories page data | `_data/repositories.yml` |
| Quiz PDFs | `assets/quiz_pdfs/<DD.MM.YYYY>/` |
| Pictionary app (standalone JS, Firebase) | `projects/pictionary/` |
| Images | `assets/img/` |

Blog posts would go in `_posts/`, which is currently empty. `/blog/` still builds from `blog/index.html` but is deliberately kept out of the navbar — the nav link only appears if `blog_nav_title` is set in `_config.yml`.

## Adding a pub quiz

The recurring task. For a quiz on, say, 1 September 2026:

1. Put the PDFs in `assets/quiz_pdfs/01.09.2026/`, named `Duke's quiz 01.09.2026 Trivia.pdf` and `... Special.pdf`.
2. Add a dated section to the bottom of `_projects/quizzes.md`, following the existing entries. URL-encode the spaces as `%20`.
3. Commit and push — deployment is automatic.

## Running locally

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>. Some plugins need native tooling (`imagemagick` for responsive images, `mermaid.cli` for diagrams); if that's a hassle, use the container instead:

```bash
docker-compose up    # serves on http://localhost:8080 with livereload
```

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site with Jekyll and pushes `_site` to the `gh-pages` branch, which GitHub Pages serves. Nothing to do by hand.

## Relationship to upstream al-folio

This repo was forked from al-folio in **March 2023** and carries the theme files directly rather than consuming it as a remote theme, so upstream changes are not pulled in automatically.

That is intentional. As of al-folio **v1.0** (June 2026) the theme was rearchitected into a thin starter plus a set of versioned gems, with styling moved from Bootstrap/SCSS to Tailwind — none of the theme files in this repo exist upstream any more, so there is no sensible merge path. If this site is ever modernised it should be a fresh start from the current al-folio starter with the content ported over, not a merge.

Local divergences from upstream worth knowing about, in case they ever need re-applying:

- `_includes/scripts/mathjax.html` — polyfill.io replaced with the Cloudflare mirror after the June 2024 supply-chain attack.
- `_includes/repository/repo.html`, `repo_user.html` — repository cards point at a working `github-readme-stats` instance instead of the unreliable public one.
- `_sass/_themes.scss` — accent colour tweaks.
- `_pages/watch.html`, `projects/pictionary/` — additions of my own, not from the theme.

`assets/js/distillpub/` is unused now that the distill demo post is gone. Note that its `transforms.v2.js` re-fetches the Distill runtime from `distill.pub` without an integrity check — so if you ever write a `layout: distill` post, update that bundle first.

## Credit and licence

Theme by [Maruan Al-Shedivat](https://github.com/alshedivat) and the al-folio contributors, MIT licensed — see `LICENSE`. Site content is mine.
