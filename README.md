# Md Ashraful Islam — Portfolio

A responsive, dark-first personal portfolio built with React, TypeScript, Vite, Lucide icons, and custom CSS. Designed for Android, junior software engineering, and backend applications, with verified project descriptions and a Data Science education background.

## Local development

Use Node.js 22.12+ (Node 22 LTS is used in CI).

```sh
npm ci
npm run dev
```

The dev command prints the local preview URL. For production validation:

```sh
npm run build
npm run preview
```

`npm run build` runs strict TypeScript checks and creates `dist/`. `npm run typecheck` runs the type check separately. The site is static and requires no secrets, API keys, database, or backend hosting.

## Review before publication

This implementation belongs on `feat/professional-portfolio`. Open a pull request into `main` and review the content and design before merging. Pull requests run `.github/workflows/ci.yml`, which builds and uploads a downloadable `portfolio-review-build` artifact. No deployment runs on pull requests or pushes.

The current deployment workflow **only runs manually on main**. No site is published by this change alone.

## GitHub Pages deployment (after approval)

1. Review and merge the pull request into `main` when ready.
2. In the repository, select **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Open **Actions → Deploy to GitHub Pages → Run workflow** and choose `main`.
4. After the action succeeds, the site is available at `https://emon-ashraf.github.io/`.

The workflow uses the official Pages artifact and deployment actions, with write permissions restricted to the deployment job. `vite.config.ts` uses `base: '/'` because this is the account's `emon-ashraf.github.io` repository. For a future project repository, change the base and asset paths accordingly. There is no client-side router, so section links work on GitHub Pages without rewrite rules.

If you later want automatic publication after approved merges, add `push: { branches: [main] }` to the deployment workflow's triggers. Keep PR validation separate.

## Editing content

- `src/content.ts`: contact information, CV destination, secondary projects, and technical skills.
- `src/App.tsx`: homepage, featured FarmGate project, about, experience, education, achievements, training, and languages.
- `src/styles.css`: color tokens, both themes, components, layouts, and responsive rules.
- `index.html`: title, canonical URL, description, and social metadata.
- `public/`: bundled images, favicon, social card, sitemap, robots file, and downloadable documents.
- `docs/CONTENT-SOURCES.md`: factual evidence, scope decisions, and asset provenance.

### Add the actual CV

The supplied `public/documents/cv-placeholder.pdf` is explicitly a placeholder, including inside the PDF. It is not presented as the actual CV.

1. Add the approved PDF as `public/documents/md-ashraful-islam-cv.pdf`.
2. Update `profile.cv` in `src/content.ts` to `{ href: '/documents/md-ashraful-islam-cv.pdf', label: 'Download CV', ready: true }`.
3. Update the Contact CV subtitle in `src/App.tsx` to `Download PDF` and remove the placeholder file when no longer needed.

### Replace screenshot placeholders

FarmGate uses actual repository screenshots. Team Work Tracker and HalFood use text-labeled screenshot placeholders, not fabricated application interfaces. To replace them, add optimized screenshots to `public/images/` and replace the relevant `.project-placeholder` element in `src/App.tsx` with a semantic `figure` and an image with useful alternative text. Keep the source notes current.

### Design and accessibility

The theme defaults to dark and can be changed with the header button; the preference is stored locally when storage is available. The site includes a skip link, visible keyboard focus, semantic landmarks, native expandable project notes, labeled mobile controls, reduced-motion support, and responsive layouts. External links announce new-tab behavior. The email copy button reports success or a fallback message if clipboard access fails. No trackers, external font requests, or contact-form services are used.

## Verification

Run `npm ci` and `npm run build` before submitting changes. Check the page at narrow mobile, tablet, and desktop widths in both themes. Verify keyboard navigation, mobile navigation, project notes, the email action/copy button, downloads, and external links. Browser QA still needs to be completed in a browser before publication; the current environment did not expose the supported browser tool.

The SVG social card is bundled; some social platforms require a PNG or JPEG instead. Replace it and update `og:image` if broad social-card compatibility is needed.
